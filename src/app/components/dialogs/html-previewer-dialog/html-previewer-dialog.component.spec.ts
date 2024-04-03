import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPreviewerDialogComponent } from './html-previewer-dialog.component';

describe('HtmlPreviewerDialogComponent', () => {
  let component: HtmlPreviewerDialogComponent;
  let fixture: ComponentFixture<HtmlPreviewerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlPreviewerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlPreviewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
