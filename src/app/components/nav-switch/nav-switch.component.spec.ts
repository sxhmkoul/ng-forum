import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSwitchComponent } from './nav-switch.component';

describe('NavSwitchComponent', () => {
  let component: NavSwitchComponent;
  let fixture: ComponentFixture<NavSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
