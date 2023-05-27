import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModalComponent } from './child-modal.component';

describe('ChildModalComponent', () => {
  let component: ChildModalComponent;
  let fixture: ComponentFixture<ChildModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
