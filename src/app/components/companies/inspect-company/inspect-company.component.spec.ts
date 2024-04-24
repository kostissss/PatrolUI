import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectCompanyComponent } from './inspect-company.component';

describe('InspectCompanyComponent', () => {
  let component: InspectCompanyComponent;
  let fixture: ComponentFixture<InspectCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
