import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurValuesComponent } from './edit-our-values.component';

describe('EditOurValuesComponent', () => {
  let component: EditOurValuesComponent;
  let fixture: ComponentFixture<EditOurValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOurValuesComponent]
    });
    fixture = TestBed.createComponent(EditOurValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
