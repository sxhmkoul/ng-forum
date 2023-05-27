import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSubtitleComponent } from './hr-subtitle.component';

describe('HrSubtitleComponent', () => {
  let component: HrSubtitleComponent;
  let fixture: ComponentFixture<HrSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
