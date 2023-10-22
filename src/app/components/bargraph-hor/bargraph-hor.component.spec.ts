import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphHorComponent } from './bargraph-hor.component';

describe('BargraphHorComponent', () => {
  let component: BargraphHorComponent;
  let fixture: ComponentFixture<BargraphHorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphHorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargraphHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
