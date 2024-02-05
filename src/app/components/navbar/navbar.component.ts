import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = !!sessionStorage.getItem('access_token');
  }

  logout() {
    sessionStorage.removeItem('access_token');

    this.isAuthenticated = false;

    window.location.assign('/login');
  }
}
