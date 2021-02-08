import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoflexComponent } from './todoflex.component';

describe('TodoflexComponent', () => {
  let component: TodoflexComponent;
  let fixture: ComponentFixture<TodoflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
