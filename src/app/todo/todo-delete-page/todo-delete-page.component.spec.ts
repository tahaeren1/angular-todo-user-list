import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeletePageComponent } from './todo-delete-page.component';

describe('TodoDeletePageComponent', () => {
  let component: TodoDeletePageComponent;
  let fixture: ComponentFixture<TodoDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeletePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
