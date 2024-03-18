import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowDogComponent } from './admin-show-dog.component';

describe('AdminShowDogComponent', () => {
  let component: AdminShowDogComponent;
  let fixture: ComponentFixture<AdminShowDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminShowDogComponent]
    });
    fixture = TestBed.createComponent(AdminShowDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
