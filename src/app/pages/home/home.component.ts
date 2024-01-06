import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from "./banner/banner.component";
declare function mainJs():void;
declare function customJs():void;
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, BannerComponent]
})
export class HomeComponent {
    scrollToTop(): void {
        window.scrollTo(0, 0);
      }
    ngOnInit(): void {
        mainJs();
        customJs();
      }
}
