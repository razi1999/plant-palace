import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title: string = "";
  key: string = "";
  plantsList: Plant[] = new Array();
  plants: Plant[] = new Array();

  indoor: Plant[] = new Array();
  outdoor: Plant[] = new Array();
  flowered: Plant[] = new Array();

  categoryOptions: any[] = [{ id: "indoor", name: "Indoor Plants", checked: true },
  { id: "outdoor", name: "Outdoor Plants", checked: true }, { id: "flowered", name: "Flowering Plants", checked: true }]

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('key'))
      let key = paramMap.get('key');
      if (key) {
        this.key = key;
        this.search();
      }
    });
  }

  ngOnInit(): void {

  }

  search() {
    forkJoin(
      this.plantService.getByCategory('indoor'),
      this.plantService.getByCategory('outdoor'),
      this.plantService.getByCategory('flowered'),
    ).subscribe(data => {
      const [indoor, outdoor, flowered] = data;
      console.log(data);
      this.indoor = data[0];
      this.indoor.forEach(x => x.cat = 'indoor');
      this.outdoor = data[1];
      this.outdoor.forEach(x => x.cat = 'outdoor');
      this.flowered = data[2];
      this.flowered.forEach(x => x.cat = 'flowered');

      this.getSearchResult();

    }, err => {
      // show errors
    });
  }

  getSearchResult() {
    this.plantsList = new Array();
    if (this.categoryOptions.find(x => x.id === 'indoor').checked) {
      this.plantsList = this.plantsList.concat(this.indoor);
    }
    if (this.categoryOptions.find(x => x.id === 'outdoor').checked) {
      this.plantsList = this.plantsList.concat(this.outdoor);
    }
    if (this.categoryOptions.find(x => x.id === 'flowered').checked) {
      this.plantsList = this.plantsList.concat(this.flowered);
    }

    this.plantsList = this.plantsList.filter(x => x.commonname.includes(this.key)
      || x.scientificname.includes(this.key)
      || x.des.includes(this.key)
      || x.season.includes(this.key)
      || x.soilreqmnt.includes(this.key)
      || x.enviroment.includes(this.key)
      || x.watering.includes(this.key)
      || x.uses.includes(this.key)
    );
    this.plants = this.plantsList;
  }

  sortByPrice(sortOption: string) {
    switch (sortOption) {
      case "ascbtn":
        this.plants.sort((a, b) => a.price - b.price)
        break;
      case "dscbtn":
        this.plants.sort((a, b) => b.price - a.price)
        break;
    }
  }

  sortByName(sortOption: string) {
    switch (sortOption) {
      case "ascbtn":
        this.plants.sort((a, b) => (a.commonname > b.commonname) ? 1 : ((b.commonname > a.commonname) ? -1 : 0))
        break;
      case "dscbtn":
        this.plants.sort((a, b) => (a.commonname < b.commonname) ? 1 : ((b.commonname < a.commonname) ? -1 : 0))
        break;
    }
  }

  applySunlightFilter(option: string) {
    if (option === 'YES' || option === 'NO') {
      this.plants = this.plantsList.filter(x => x?.light?.toLowerCase() === option.toLowerCase());
    } else this.plants = this.plantsList;
  }

  filterByCategory(id: string) {
    this.categoryOptions.find(x => x.id === id).checked = !this.categoryOptions.find(x => x.id === id).checked;
    this.getSearchResult();
  }

  addToCart(key: Plant) {
    this.plantService.addToCart(key);
  }
}
