import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThinkingComponent } from './new-thinking.component';

describe('NewThinkingComponent', () => {
  let component: NewThinkingComponent;
  let fixture: ComponentFixture<NewThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
