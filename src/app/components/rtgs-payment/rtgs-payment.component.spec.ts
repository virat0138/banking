import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsPaymentComponent } from './rtgs-payment.component';

describe('RtgsPaymentComponent', () => {
  let component: RtgsPaymentComponent;
  let fixture: ComponentFixture<RtgsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgsPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtgsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
