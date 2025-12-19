import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isMobileMenuOpen = false;

  menuItems = [
    { label: 'Home', anchor: '#hero' },
    { label: 'About', anchor: '#about' },
    { label: 'Tech Stack', anchor: '#tech-stack' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Experience', anchor: '#experience' },
    { label: 'Contact', anchor: '#contact' }
  ];

  scrollToSection(anchor: string): void {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }
}

