import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navLinks } from '../models/navLinks.interface';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private darkModeService: DarkModeService) { }
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  navLinks: navLinks[] = [
    { "navTitle": "Home", "navLink": "/home" },
    { "navTitle": "About", "navLink": "/about" },
    { "navTitle": "Contact", "navLink": "/contact" },
  ]
}
