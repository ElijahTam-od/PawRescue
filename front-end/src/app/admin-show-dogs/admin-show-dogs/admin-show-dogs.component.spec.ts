import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowDogsComponent } from './admin-show-dogs.component';

describe('AdminShowDogsComponent', () => {
  let component: AdminShowDogsComponent;
  let fixture: ComponentFixture<AdminShowDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminShowDogsComponent]
    });
    fixture = TestBed.createComponent(AdminShowDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
