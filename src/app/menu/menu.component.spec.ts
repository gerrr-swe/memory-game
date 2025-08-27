import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPage } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
