import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
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

  onSubmit() {
    if (this.isFormValid()) {
      
      this.submittedCustomerData = { ...this.customerData };
      this.isSubmitted = true;
      
      console.log('Customer Data:', this.submittedCustomerData);
      
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isFormValid(): boolean {
    return Object.values(this.customerData).every(value => value.trim() !== '');
  }

  onCancel() {
    
    this.customerData = {
      customerId: '',
      customerName: '',
      primaryContact: '',
      emailId: '',
      billingAddress: ''
    };
    this.submittedCustomerData = null;
    this.isSubmitted = false;
  }
}
