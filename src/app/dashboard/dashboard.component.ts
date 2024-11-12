import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  email: string = 'example@example.com';
  mobile: string = '+1234567890';

  constructor(private router: Router) {}

  navigateToStore() {
    this.router.navigate(['/store']);
  }
}
