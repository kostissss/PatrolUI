import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartnerAccountModalComponent } from './create-partner-account-modal.component';

describe('CreatePartnerAccountModalComponent', () => {
  let component: CreatePartnerAccountModalComponent;
  let fixture: ComponentFixture<CreatePartnerAccountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePartnerAccountModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePartnerAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
