import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeDropDownComponent } from './account-change-drop-down.component';

describe('AccountChangeDropDownComponent', () => {
  let component: AccountChangeDropDownComponent;
  let fixture: ComponentFixture<AccountChangeDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountChangeDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountChangeDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
