import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDogDetailsComponent } from './user.dog.details.component';

describe('UserDogDetailsComponent', () => {
  let component: UserDogDetailsComponent;
  let fixture: ComponentFixture<UserDogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDogDetailsComponent]
    });
    fixture = TestBed.createComponent(UserDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
