import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestingComponent } from './components/testing/testing.component';
import { CardsComponent } from './components/cards/cards.component';
import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TestingComponent,CardsComponent,GraphComponent,TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'setupng';
  value = 1;
  func(e:any){
    console.log(e);
  }
}
