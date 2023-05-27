import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBackgroundWrapperComponent } from './animated-background-wrapper.component';

describe('AnimatedBackgroundWrapperComponent', () => {
  let component: AnimatedBackgroundWrapperComponent;
  let fixture: ComponentFixture<AnimatedBackgroundWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedBackgroundWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBackgroundWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
