import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPointsManagerComponent } from './check-points-manager.component';

describe('CheckPointsManagerComponent', () => {
  let component: CheckPointsManagerComponent;
  let fixture: ComponentFixture<CheckPointsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckPointsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckPointsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
