import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './ttc-calculator.component.html',
  styleUrls: ['./ttc-calculator.component.css']
})
export class TtcCalculatorComponent {
  priceHT: number = 0; 
  quantity: number = 1; 
  tva: number = 18; 
  unitTtcPrice: number = 0;
  totalTtcPrice: number = 0;
  discount: number = 0;

  constructor() {
    this.calculatePrices();
  }


  calculatePrices() {
    this.unitTtcPrice = this.priceHT * (1 + this.tva / 100);

    if (this.quantity >= 10 && this.quantity <= 15) {
      this.discount = 0.20;
    } else if (this.quantity > 15) {
      this.discount = 0.30;
    } else {
      this.discount = 0;
    }

    const discountAmount = this.unitTtcPrice * this.quantity * this.discount;
    this.totalTtcPrice = this.unitTtcPrice * this.quantity - discountAmount;
  }
}
