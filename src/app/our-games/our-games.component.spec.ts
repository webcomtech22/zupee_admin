import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGamesComponent } from './our-games.component';

describe('OurGamesComponent', () => {
  let component: OurGamesComponent;
  let fixture: ComponentFixture<OurGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurGamesComponent]
    });
    fixture = TestBed.createComponent(OurGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
