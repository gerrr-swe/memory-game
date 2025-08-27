import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuPage {
  private router = inject(Router);
  
  cats() {
    this.router.navigate(["/game", "cats"]);
  }

  dogs() {
    this.router.navigate(["/game", "dogs"]);
  }

  bears() {
    this.router.navigate(["/game", "bears"]);
  }
}
