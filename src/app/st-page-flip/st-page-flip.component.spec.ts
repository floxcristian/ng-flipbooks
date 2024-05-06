import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPageFlipComponent } from './st-page-flip.component';

describe('StPageFlipComponent', () => {
  let component: StPageFlipComponent;
  let fixture: ComponentFixture<StPageFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StPageFlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StPageFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
