import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';


@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [ButtonModule,PanelModule,SidebarModule,CalendarModule,FormsModule,DropdownModule,CommonModule,CardModule,ProgressBarModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TestingComponent implements OnInit {
  sidebarVisible: boolean = false;
  date: Date = new Date();

  groupby: groupby[]| undefined;
  selectedgroup: groupby | undefined;
  status: status[]| undefined;
  selectedtask: status | undefined;
  ngOnInit() {
      this.groupby = [
          { name: 'Reservation'},
          { name: 'Employee' },
          { name: 'Room Number' }
      ];
      this.status = [
        { task: 'Success'},
        { task: 'Failed' },
    ];
  }

  // value: number = 0;
}
interface groupby {
  name: string;
}
interface status {
  task: string;
}

