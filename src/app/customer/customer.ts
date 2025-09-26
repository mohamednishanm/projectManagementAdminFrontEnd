import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

interface CustomerItem {
  id: string;
  name: string;
  contact: string;
  email: string;
  address: string;
  submittedDate: Date;
}

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

  // Storage for submitted customers
  customers: CustomerItem[] = [];

  onSubmit() {
    if (this.customerId && this.customerName && this.emailId) {
      const newCustomer: CustomerItem = {
        id: this.customerId,
        name: this.customerName,
        contact: this.primaryContact,
        email: this.emailId,
        address: this.billingAddress,
        submittedDate: new Date()
      };

      this.customers.push(newCustomer);

      // Reset form
      this.customerId = '';
      this.customerName = '';
      this.primaryContact = '';
      this.emailId = '';
      this.billingAddress = '';
    }
  }

  resetForm() {
    this.customerId = '';
    this.customerName = '';
    this.primaryContact = '';
    this.emailId = '';
    this.billingAddress = '';
  }
}
