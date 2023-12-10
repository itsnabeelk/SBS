import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from "./banner/banner.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, BannerComponent]
})
export class HomeComponent {

}
