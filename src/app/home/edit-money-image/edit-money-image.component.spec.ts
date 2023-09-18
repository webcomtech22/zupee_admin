import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoneyImageComponent } from './edit-money-image.component';

describe('EditMoneyImageComponent', () => {
  let component: EditMoneyImageComponent;
  let fixture: ComponentFixture<EditMoneyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMoneyImageComponent]
    });
    fixture = TestBed.createComponent(EditMoneyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
