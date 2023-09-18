import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtVideoComponent } from './abt-video.component';

describe('AbtVideoComponent', () => {
  let component: AbtVideoComponent;
  let fixture: ComponentFixture<AbtVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtVideoComponent]
    });
    fixture = TestBed.createComponent(AbtVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
