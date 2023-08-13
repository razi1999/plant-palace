import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plants: Plant[] = new Array();

  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.plantService.getAll().subscribe((res) => {
      console.log(res);
      this.plants = res;
    });
  }
}
