import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCustomComponent } from './footer-custom.component';

describe('FooterCustomComponent', () => {
  let component: FooterCustomComponent;
  let fixture: ComponentFixture<FooterCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCustomComponent]
    });
    fixture = TestBed.createComponent(FooterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
