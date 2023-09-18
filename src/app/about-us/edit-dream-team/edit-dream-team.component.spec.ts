import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDreamTeamComponent } from './edit-dream-team.component';

describe('EditDreamTeamComponent', () => {
  let component: EditDreamTeamComponent;
  let fixture: ComponentFixture<EditDreamTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDreamTeamComponent]
    });
    fixture = TestBed.createComponent(EditDreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
