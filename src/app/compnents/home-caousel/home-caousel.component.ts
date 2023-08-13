import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-home-caousel',
  templateUrl: './home-caousel.component.html',
  styleUrls: ['./home-caousel.component.scss']
})
export class HomeCaouselComponent implements OnInit {

  plants: Plant[] = new Array();
  
  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.plantService.getHomeCarouselPlants().subscribe((res) => {
      console.log(res);
      this.plants = res;
    });
  }
}
