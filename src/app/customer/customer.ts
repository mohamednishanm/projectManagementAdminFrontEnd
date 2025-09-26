import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  // Basic form variables
  customerId = '';
  customerName = '';
  primaryContact = '';
  emailId = '';
  billingAddress = '';

  // Single customer storage
  customer: any = null;

  onSubmit() {
    if (this.customerId && this.customerName && this.emailId) {
      this.customer = {
        id: this.customerId,
        name: this.customerName,
        contact: this.primaryContact,
        email: this.emailId,
        address: this.billingAddress,
        submittedDate: new Date()
      };
    }
  }

  resetForm() {
    this.customerId = '';
    this.customerName = '';
    this.primaryContact = '';
    this.emailId = '';
    this.billingAddress = '';
    this.customer = '';
  }
}
