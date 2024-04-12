import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGridComponent } from './assign-grid.component';

describe('AssignGridComponent', () => {
  let component: AssignGridComponent;
  let fixture: ComponentFixture<AssignGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
