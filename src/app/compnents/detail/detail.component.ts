import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  plant: Plant = new Plant();
  name!: string;
  id!: string;

  selectedImage: string = "";

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let name = paramMap.get('name');
      let id = paramMap.get('id');
      if (name && id) {
        this.getByCategory(name, id);
      }
    });
  }

  ngOnInit(): void {

  }

  getByCategory(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.plantService.getByCategory(name).subscribe((res: Plant[]) => {
      let plnt = res?.find(x => x.id === this.id);
      if (plnt) {
        this.plant = plnt;
        this.selectedImage = this.plant.img1;
      }
      console.log(this.plant);
    });
  }

  addToCart(key: Plant) {
    this.plantService.addToCart(key);
  }
}
