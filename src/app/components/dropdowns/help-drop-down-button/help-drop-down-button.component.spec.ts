import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDropDownButtonComponent } from './help-drop-down-button.component';

describe('HelpDropDownButtonComponent', () => {
  let component: HelpDropDownButtonComponent;
  let fixture: ComponentFixture<HelpDropDownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpDropDownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpDropDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
