import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.html',
  styleUrls: ['./customer.css']
})
export class Customer {
  customerData = {
    customerId: '',
    customerName: '',
    primaryContact: '',
    emailId: '',
    billingAddress: ''
  };

  submittedCustomerData: any = null;
  isSubmitted = false;

  // Validation: check all fields are non-empty
  private isFormValid(): boolean {
    return Object.values(this.customerData).every(value => value && value.trim() !== '');
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.submittedCustomerData = { ...this.customerData };
      this.isSubmitted = true;
    } else {
      alert(' Please fill in all required fields before saving.');
    }
  }

  onCancel() {
    this.customerData = {
      customerId: '',
      customerName: '',
      primaryContact: '',
      emailId: '',
      billingAddress: ''
    };
    this.isSubmitted = false;
    this.submittedCustomerData = null;
  }
}
