import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtDreamteamComponent } from './abt-dreamteam.component';

describe('AbtDreamteamComponent', () => {
  let component: AbtDreamteamComponent;
  let fixture: ComponentFixture<AbtDreamteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtDreamteamComponent]
    });
    fixture = TestBed.createComponent(AbtDreamteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
