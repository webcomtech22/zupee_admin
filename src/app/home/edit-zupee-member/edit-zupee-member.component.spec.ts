import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZupeeMemberComponent } from './edit-zupee-member.component';

describe('EditZupeeMemberComponent', () => {
  let component: EditZupeeMemberComponent;
  let fixture: ComponentFixture<EditZupeeMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditZupeeMemberComponent]
    });
    fixture = TestBed.createComponent(EditZupeeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
