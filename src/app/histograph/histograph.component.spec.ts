import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistographComponent } from './histograph.component';

describe('HistographComponent', () => {
  let component: HistographComponent;
  let fixture: ComponentFixture<HistographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistographComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
