import { Component, AfterViewInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CardsHomeComponent } from "../cards-home/cards-home.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CardsHomeComponent]
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize Flowbite components
    initFlowbite();
  }
}
