import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFooterCustomComponent } from './edit-footer-custom.component';

describe('EditFooterCustomComponent', () => {
  let component: EditFooterCustomComponent;
  let fixture: ComponentFixture<EditFooterCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFooterCustomComponent]
    });
    fixture = TestBed.createComponent(EditFooterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
