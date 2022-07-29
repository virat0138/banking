import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsPaymentComponent } from './imps-payment.component';

describe('ImpsPaymentComponent', () => {
  let component: ImpsPaymentComponent;
  let fixture: ComponentFixture<ImpsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpsPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
