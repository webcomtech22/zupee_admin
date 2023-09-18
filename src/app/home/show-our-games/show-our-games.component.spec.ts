import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOurGamesComponent } from './show-our-games.component';

describe('ShowOurGamesComponent', () => {
  let component: ShowOurGamesComponent;
  let fixture: ComponentFixture<ShowOurGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOurGamesComponent]
    });
    fixture = TestBed.createComponent(ShowOurGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
