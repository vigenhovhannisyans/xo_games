import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePointComponent } from './live-point.component';

describe('LivePointComponent', () => {
  let component: LivePointComponent;
  let fixture: ComponentFixture<LivePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
