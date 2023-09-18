import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZupeeMemberComponent } from './zupee-member.component';

describe('ZupeeMemberComponent', () => {
  let component: ZupeeMemberComponent;
  let fixture: ComponentFixture<ZupeeMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZupeeMemberComponent]
    });
    fixture = TestBed.createComponent(ZupeeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
