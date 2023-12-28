import { Component } from '@angular/core';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  dataForKeysDeliveredChart :any;
  chartOptions: any;

  constructor() {
    this.dataForKeysDeliveredChart = {
      labels: ['01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02', '08/02', '09/02', '10/02'],
      datasets: [
        {
          label: 'Keys Delivered',
          backgroundColor: '#5A6ACF',
          data: [3, 2, 5, 1, 4, 6, 3, 4, 2, 1],
          barPercentage: 0.2,
        }
      ]
    };
    this.chartOptions = {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: true,
            borderDash: [5, 5]
          }
        }
      },
    }
  }
}
