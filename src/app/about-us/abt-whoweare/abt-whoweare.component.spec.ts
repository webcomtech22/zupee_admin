import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtWhoweareComponent } from './abt-whoweare.component';

describe('AbtWhoweareComponent', () => {
  let component: AbtWhoweareComponent;
  let fixture: ComponentFixture<AbtWhoweareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtWhoweareComponent]
    });
    fixture = TestBed.createComponent(AbtWhoweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
