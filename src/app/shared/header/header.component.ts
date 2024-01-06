import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router: any;
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  
  closeNavbar(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      offcanvas.hide();
    }
  }

  navigateTo(route: string): void {
    this.scrollToTop();
    this.closeNavbar();
    this.router.navigate([route]);
  }
}
