import { ChangeDetectionStrategy,Component, NgZone,OnInit,OnDestroy,} from '@angular/core';
import { User, UsersService } from '../users.service';
import * as ChartJs from 'chart.js/auto';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhComponent implements OnInit, OnDestroy {
  oddUsers: User[];
  evenUsers: User[];
  chart: any;

  constructor(private userService: UsersService, private ngzone: NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }

  ngOnInit(): void {
    this.ngzone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  addUser(list: User[], newUser: string): void {
    const trimmedName = newUser.trim();
    if (!trimmedName) return; // Prevent empty names
    this.userService.addUser(list, trimmedName);
    this.updateChart();
  }

  createChart(): void {
    const data = [
      { users: 'Workers', count: this.oddUsers.length },
      { users: 'Boss', count: this.evenUsers.length },
    ];
    this.chart = new ChartJs.Chart('MyChart', {
      type: 'bar',
      data: {
        labels: data.map((row) => row.users),
        datasets: [
          {
            label: 'Entreprise stats',
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = [
        this.oddUsers.length,
        this.evenUsers.length,
      ];
      this.chart.update();
    }
  }
}
