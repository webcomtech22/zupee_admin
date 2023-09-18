import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtInvestjourneyComponent } from './abt-investjourney.component';

describe('AbtInvestjourneyComponent', () => {
  let component: AbtInvestjourneyComponent;
  let fixture: ComponentFixture<AbtInvestjourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtInvestjourneyComponent]
    });
    fixture = TestBed.createComponent(AbtInvestjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
