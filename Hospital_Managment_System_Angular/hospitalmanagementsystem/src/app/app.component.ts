import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HospitalService } from './components/service/hospital.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'grocessary-management-front-end';
  isLoggedIn = false;
  isAdminLoggedIn = false;
  isDoctorLoggedIn = false;

  constructor(private hospitalService: HospitalService, private router: Router) {
    // Listen for route changes to check authorization status
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.updateLoginStatus();
      });
  }

  /**
   * Updates the login status flags based on the user's authorization.
   */
  private updateLoginStatus(): void {
    if (this.hospitalService.getClientAuthorization()) {
      this.isLoggedIn = true;
      this.isAdminLoggedIn = false;
      this.isDoctorLoggedIn = false;
    } else if (this.hospitalService.getDoctorAuthorization()) {
      this.isDoctorLoggedIn = true;
      this.isAdminLoggedIn = false;
      this.isLoggedIn = false;
    } else if (this.hospitalService.getAdminAuthorization()) {
      this.isAdminLoggedIn = true;
      this.isLoggedIn = false;
      this.isDoctorLoggedIn = false;
    } else {
      this.isLoggedIn = false;
      this.isAdminLoggedIn = false;
      this.isDoctorLoggedIn = false;
    }
  }
}
