import { Component, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GamePage {
  private activatedRoute = inject(ActivatedRoute);
  animal = signal('');
  constructor () {
    this.activatedRoute.params.subscribe( params => {
      this.animal.set(params['animal']);
    });
  }
}