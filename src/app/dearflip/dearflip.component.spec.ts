import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DearflipComponent } from './dearflip.component';

describe('DearflipComponent', () => {
  let component: DearflipComponent;
  let fixture: ComponentFixture<DearflipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DearflipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DearflipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
