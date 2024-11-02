import { Injectable, inject } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private logger = inject(LoggerService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
  add(x: number, y: number): number {
    this.logger.logger(`${x} + ${y} = ${x + y}`);
    return x + y;
  }
  substract(x: number, y: number): number {
    this.logger.logger(`${x} - ${y} = ${x - y} `);
    return x - y;
  }
}
