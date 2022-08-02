import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTransactionComponent } from './validate-transaction.component';

describe('ValidateTransactionComponent', () => {
  let component: ValidateTransactionComponent;
  let fixture: ComponentFixture<ValidateTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
