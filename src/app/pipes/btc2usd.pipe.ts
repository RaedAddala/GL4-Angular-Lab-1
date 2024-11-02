import { Pipe, PipeTransform } from '@angular/core';
const change = 17443.8;
@Pipe({
    name: 'btc2usd',
    standalone: true,
})
export class Btc2usdPipe implements PipeTransform {
  transform(amount: number, isBtc2Usd = true): number {
    if (isBtc2Usd) return amount * change;
    return amount / change;
  }
}
