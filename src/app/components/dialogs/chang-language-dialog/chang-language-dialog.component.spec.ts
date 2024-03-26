import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangLanguageDialogComponent } from './chang-language-dialog.component';

describe('ChangLanguageDialogComponent', () => {
  let component: ChangLanguageDialogComponent;
  let fixture: ComponentFixture<ChangLanguageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangLanguageDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangLanguageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
