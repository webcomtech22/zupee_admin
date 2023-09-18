import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurgamesComponent } from './ourgames.component';

describe('OurgamesComponent', () => {
  let component: OurgamesComponent;
  let fixture: ComponentFixture<OurgamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurgamesComponent]
    });
    fixture = TestBed.createComponent(OurgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
