import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletePageComponent } from './user-delete-page.component';

describe('UserDeletePageComponent', () => {
  let component: UserDeletePageComponent;
  let fixture: ComponentFixture<UserDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeletePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
