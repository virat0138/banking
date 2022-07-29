import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftPaymentComponent } from './neft-payment.component';

describe('NeftPaymentComponent', () => {
  let component: NeftPaymentComponent;
  let fixture: ComponentFixture<NeftPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeftPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeftPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
