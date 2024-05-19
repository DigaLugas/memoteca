import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThinkComponent } from './list-think.component';

describe('ListThinkComponent', () => {
  let component: ListThinkComponent;
  let fixture: ComponentFixture<ListThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
