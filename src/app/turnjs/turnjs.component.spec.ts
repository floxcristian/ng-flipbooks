import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnjsComponent } from './turnjs.component';

describe('TurnjsComponent', () => {
  let component: TurnjsComponent;
  let fixture: ComponentFixture<TurnjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
