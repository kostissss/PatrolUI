import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSelectorComponent } from './companies-selector.component';

describe('CompaniesSelectorComponent', () => {
  let component: CompaniesSelectorComponent;
  let fixture: ComponentFixture<CompaniesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompaniesSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
