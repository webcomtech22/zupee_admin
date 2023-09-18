import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyImageComponent } from './money-image.component';

describe('MoneyImageComponent', () => {
  let component: MoneyImageComponent;
  let fixture: ComponentFixture<MoneyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyImageComponent]
    });
    fixture = TestBed.createComponent(MoneyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
