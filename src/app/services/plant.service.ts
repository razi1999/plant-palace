import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Plant } from '../models/plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  baseUrl: string = "assets/json-files/";

  // cartItems: Subject<Plant[]> = new Subject();
  private cartItems: Plant[] = new Array();

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + 'indoor.json');
  }

  getByCategory(name: string): Observable<any> {
    // let fileName: string = "indoor"
    let fileName: string = "test-file"
    switch (name) {
      case "indoor":
        fileName = "indoor";
        break;
      case "outdoor":
        fileName = "outdoor";
        break;
      case "flowered":
        fileName = "flowered";
        break;
    }
    return this.http.get(this.baseUrl + fileName + '.json');
  }

  getHomeCarouselPlants(): Observable<any> {
    return this.http.get(this.baseUrl + 'home-carousel.json');
  }

  // getCartItems(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'cart.json');
  // }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(plant: Plant) {
    plant.quantity = 1
    plant.totalPrice = plant.price * plant.quantity;
    this.cartItems.push(plant);
  }


  clearCartAfterCheckout() {
    this.cartItems = new Array();
  }

}
