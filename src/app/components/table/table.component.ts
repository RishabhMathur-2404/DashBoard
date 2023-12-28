import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ TableModule,CardModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  reservations = [
    { id: '43747', dateRange: '12th Mar - 15th Mar' },
    { id: '43748', dateRange: '12th Mar - 15th Mar' },
    { id: '43749', dateRange: '12th Mar - 15th Mar' },
    { id: '43750', dateRange: '12th Mar - 15th Mar' },
    // ... other reservations
  ];




  selectedReservationDetails: ReservationDetail[] = [];

  selectReservation(reservation: any) {
    // Assuming you have a method to get the details based on the selected reservation
    this.selectedReservationDetails = this.getDetailsForReservation(reservation);

  }

  getDetailsForReservation(reservation: any): ReservationDetail[] {
    // Replace this with your actual logic to get the reservation details
    return [
      { roomNumber: '600', guest: 'Harsh', keyDuration: '12th Mar - 15th Mar', generatedBy: 'Ali', status: 'Success', timestamp: 'Mar 12, 2023, 11:53 PM' },
      { roomNumber: '600', guest: 'Vikash', keyDuration: '12th Mar - 15th Mar', generatedBy: 'Ali', status: 'Success', timestamp: 'Mar 12, 2023, 11:53 PM' },
      { roomNumber: '600', guest: 'Harsh', keyDuration: '12th Mar - 15th Mar', generatedBy: 'Ali', status: 'Failed', timestamp: 'Mar 12, 2023, 11:53 PM' },
      { roomNumber: '600', guest: 'Vikash', keyDuration: '12th Mar - 15th Mar', generatedBy: 'Ali', status: 'Success', timestamp: 'Mar 12, 2023, 11:53 PM' },
      // ... other details
    ];
  }

  currentPage = 1;
  totalEntries = 10;
  entriesPerPage = 4;
  pages: number[] = [];

  constructor() {
    this.calculatePages();
  }

  calculatePages() {
    const numberOfPages = Math.ceil(this.totalEntries / this.entriesPerPage);
    this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Load your data for this page
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      // Load your data for this page
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    // Load your data for this page
  }
}

interface ReservationDetail {
  roomNumber: string;
  guest: string;
  keyDuration: string;
  generatedBy: string;
  status: string;
  timestamp: string;
}
