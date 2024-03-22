import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDropDownButtonsComponent } from './settings-drop-down-buttons.component';

describe('SettingsDropDownButtonsComponent', () => {
  let component: SettingsDropDownButtonsComponent;
  let fixture: ComponentFixture<SettingsDropDownButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsDropDownButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsDropDownButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
