import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQueAnsComponent } from './edit-que-ans.component';

describe('EditQueAnsComponent', () => {
  let component: EditQueAnsComponent;
  let fixture: ComponentFixture<EditQueAnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditQueAnsComponent]
    });
    fixture = TestBed.createComponent(EditQueAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
