import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBeneficiaryComponent } from './add-new-beneficiary.component';

describe('AddNewBeneficiaryComponent', () => {
  let component: AddNewBeneficiaryComponent;
  let fixture: ComponentFixture<AddNewBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
