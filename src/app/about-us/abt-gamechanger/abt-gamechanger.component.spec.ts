import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtGamechangerComponent } from './abt-gamechanger.component';

describe('AbtGamechangerComponent', () => {
  let component: AbtGamechangerComponent;
  let fixture: ComponentFixture<AbtGamechangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtGamechangerComponent]
    });
    fixture = TestBed.createComponent(AbtGamechangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
