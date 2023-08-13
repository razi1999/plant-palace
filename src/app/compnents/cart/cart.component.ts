import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Plant } from 'src/app/models/plant.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class CartComponent implements OnInit {

  plants: Plant[] = new Array();

  constructor(private plantService: PlantService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    // this.plantService.getCartItems().subscribe((res: Plant[]) => {
    //   console.log(res);
    //   res.forEach(element => {
    //     element.quantity = 1;
    //     element.totalPrice = element.quantity * element.price;
    //   });
    //   this.plants = res;
    // });

    this.plants = this.plantService.getCartItems();
  }

  getTotalPrice(plant: Plant) {
    let totalPrice = plant.price * (plant?.quantity ? plant.quantity : 1);
    if (this.plants.find(x => x.id === plant.id)) {
      this.plants.forEach(x => { if (x.id === plant.id) x.totalPrice = totalPrice; })
    }
  }

  getTotal() {
    return this.plants.map(x => x.totalPrice).reduce((a, b) => (a ? a : 0) + (b ? b : 0), 0);
  }

  removeFromCart(plant: Plant) {
    this.plants.splice(this.plants.findIndex(x => x.id === plant.id), 1);
  }

  open(content: any) {
    this.modalService.open(content);
  }

  clearCart(){
    this.plantService.clearCartAfterCheckout();
  }
}
