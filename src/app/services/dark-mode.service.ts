import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  toggleDarkMode(): void {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.toggle('dark');

    // Persist dark mode preference in localStorage
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  }

  initializeDarkMode(): void {
    const userPreference = localStorage.getItem('color-theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPreference === 'dark' || (!userPreference && systemPreference)) {
      document.documentElement.classList.add('dark');
    }
  }
}
