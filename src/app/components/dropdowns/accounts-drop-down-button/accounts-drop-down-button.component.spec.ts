import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDropDownButtonComponent } from './accounts-drop-down-button.component';

describe('AccountsDropDownButtonComponent', () => {
  let component: AccountsDropDownButtonComponent;
  let fixture: ComponentFixture<AccountsDropDownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDropDownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDropDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
