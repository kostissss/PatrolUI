import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: NotifHeaderComponent;
  let fixture: ComponentFixture<NotifHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
