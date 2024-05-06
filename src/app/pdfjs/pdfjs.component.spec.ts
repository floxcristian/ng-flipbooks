import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfjsComponent } from './pdfjs.component';

describe('PdfjsComponent', () => {
  let component: PdfjsComponent;
  let fixture: ComponentFixture<PdfjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
