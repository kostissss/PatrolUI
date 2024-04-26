import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePointsDialogComponent } from './generate-points-dialog.component';

describe('GeneratePointsDialogComponent', () => {
  let component: GeneratePointsDialogComponent;
  let fixture: ComponentFixture<GeneratePointsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratePointsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratePointsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
