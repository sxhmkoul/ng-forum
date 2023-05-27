import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupWrapperComponent } from './login-signup-wrapper.component';

describe('LoginSignupWrapperComponent', () => {
  let component: LoginSignupWrapperComponent;
  let fixture: ComponentFixture<LoginSignupWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
