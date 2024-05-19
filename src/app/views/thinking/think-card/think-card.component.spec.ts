import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkCardComponent } from './think-card.component';

describe('ThinkCardComponent', () => {
  let component: ThinkCardComponent;
  let fixture: ComponentFixture<ThinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
