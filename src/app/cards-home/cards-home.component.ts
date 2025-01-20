import { Component } from '@angular/core';
import { homeCards } from '../models/homeCards.interface';
@Component({
  selector: 'app-cards-home',
  imports: [],
  templateUrl: './cards-home.component.html',
  styleUrl: './cards-home.component.css'
})
export class CardsHomeComponent {
  homeCards: homeCards[] = [
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
    {"titleCard": "Product", "pCard": "orem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis enimreprehenderit vitae, asperiores temporibus obcaecati?"},
  ]
}
