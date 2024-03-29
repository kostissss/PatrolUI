import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartnerAccountModalComponent } from './manage-partner-account-modal.component';

describe('ManagePartnerAccountModalComponent', () => {
  let component: ManagePartnerAccountModalComponent;
  let fixture: ComponentFixture<ManagePartnerAccountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagePartnerAccountModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagePartnerAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
