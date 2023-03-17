import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedFeedComponent } from './liked-feed.component';

describe('LikedFeedComponent', () => {
  let component: LikedFeedComponent;
  let fixture: ComponentFixture<LikedFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
