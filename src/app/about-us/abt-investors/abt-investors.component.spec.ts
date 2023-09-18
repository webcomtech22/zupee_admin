import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtInvestorsComponent } from './abt-investors.component';

describe('AbtInvestorsComponent', () => {
  let component: AbtInvestorsComponent;
  let fixture: ComponentFixture<AbtInvestorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtInvestorsComponent]
    });
    fixture = TestBed.createComponent(AbtInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
