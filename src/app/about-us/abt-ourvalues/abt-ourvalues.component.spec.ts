import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtOurvaluesComponent } from './abt-ourvalues.component';

describe('AbtOurvaluesComponent', () => {
  let component: AbtOurvaluesComponent;
  let fixture: ComponentFixture<AbtOurvaluesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtOurvaluesComponent]
    });
    fixture = TestBed.createComponent(AbtOurvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
