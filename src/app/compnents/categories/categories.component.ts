import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  title: string = "";
  plantsList: Plant[] = new Array();
  plants: Plant[] = new Array();

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('name'));
      let name = paramMap.get('name');
      if (name) {
        this.title = name;
        this.getByCategory(name);
      }
    });
  }

  ngOnInit(): void {

  }

  getByCategory(name: string) {
    this.plantService.getByCategory(name).subscribe((res) => {
      console.log(res);
      this.plantsList = res;
      this.plants = res;
    });
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

  addToCart(key: Plant) {
    this.plantService.addToCart(key);
  }
}
