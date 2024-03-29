import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToPartnersDialogComponent } from './assign-to-partners-dialog.component';

describe('AssignToPartnersDialogComponent', () => {
  let component: AssignToPartnersDialogComponent;
  let fixture: ComponentFixture<AssignToPartnersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignToPartnersDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignToPartnersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
