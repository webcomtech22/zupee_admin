import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtBannerComponent } from './abt-banner.component';

describe('AbtBannerComponent', () => {
  let component: AbtBannerComponent;
  let fixture: ComponentFixture<AbtBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtBannerComponent]
    });
    fixture = TestBed.createComponent(AbtBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
