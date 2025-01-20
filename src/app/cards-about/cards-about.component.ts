import { Component } from '@angular/core';
import { aboutCards } from '../models/aboutCards.interface';

@Component({
  selector: 'app-cards-about',
  imports: [],
  templateUrl: './cards-about.component.html',
  styleUrl: './cards-about.component.css'
})
export class CardsAboutComponent {
  aboutCards: aboutCards[] = [
    { "atitleCard": "Item", "apCard": "This is the first card.", "aimgCard": "/images/Task-3-Tailwindcss2.jpg" },
    { "atitleCard": "Item", "apCard": "This is the second  card.", "aimgCard": "/images/Task-3-Tailwindcss3.jpg" },
    { "atitleCard": "Item", "apCard": "This is the third  card.", "aimgCard": "/images/Task-3-Tailwindcss4.jpg" },
    { "atitleCard": "Item", "apCard": "This is the first card.", "aimgCard": "/images/Task-3-Tailwindcss5.jpg" },
    { "atitleCard": "Item", "apCard": "This is the second card.", "aimgCard": "/images/Task-3-Tailwindcss6.jpg" },
    { "atitleCard": "Item", "apCard": "This is the third card.", "aimgCard": "/images/Task-3-Tailwindcss2.jpg" },
    { "atitleCard": "Item", "apCard": "This is the first card.", "aimgCard": "/images/Task-3-Tailwindcss3.jpg" },
    { "atitleCard": "Item", "apCard": "This is the second card.", "aimgCard": "/images/Task-3-Tailwindcss4.jpg" },
    { "atitleCard": "Item", "apCard": "This is the third card.", "aimgCard": "/images/Task-3-Tailwindcss5.jpg" },
  ]
}
