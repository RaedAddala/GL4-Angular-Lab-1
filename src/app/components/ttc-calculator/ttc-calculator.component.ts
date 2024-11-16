import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ttc-calculator.component.html',
  styleUrls: ['./ttc-calculator.component.css']
})
export class TtcCalculatorComponent {

  priceHT = signal(0);
  quantity = signal(1);
  tva = signal(18);

  unitTtcPrice = computed(() => this.priceHT() * (1 + this.tva() / 100));

  discount = computed(() => {
    const qty = this.quantity();
    if (qty >= 10 && qty <= 15) return 0.20;
    if (qty > 15) return 0.30;
    return 0;
  });

  totalTtcPrice = computed(() => {
    const unitPrice = this.unitTtcPrice();
    const qty = this.quantity();
    const discountAmount = unitPrice * qty * this.discount();
    return unitPrice * qty - discountAmount;
  });
}
