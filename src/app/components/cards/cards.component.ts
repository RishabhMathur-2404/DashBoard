import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardModule,ProgressBarModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input({required : true}) value!:number;
  @Output() callmethod = new EventEmitter()
}


