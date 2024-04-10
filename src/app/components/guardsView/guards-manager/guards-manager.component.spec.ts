import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsManagerComponent } from './guards-manager.component';

describe('GuardsManagerComponent', () => {
  let component: GuardsManagerComponent;
  let fixture: ComponentFixture<GuardsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
