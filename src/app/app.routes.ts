import { Routes } from '@angular/router';
import { GamePage } from './game/game.component';
import { MenuPage } from './menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'game/:animal',
    component: GamePage
  }
];
