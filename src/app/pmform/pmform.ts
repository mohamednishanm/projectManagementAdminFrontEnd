import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

interface PMFormItem {
  fullName: string;
  employeeId: string;
  department: string;
  email: string;
  submittedDate: Date;
}

@Component({
  selector: 'app-pmform',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pmform.html',
  styleUrls: ['./pmform.css'],
})
export class Pmform {
  // Basic form variables
  fullName = '';
  employeeId = '';
  department = '';
  email = '';

  // Department options for dropdown
  departmentOptions = [
    'Engineering',
    'Product Management',
    'Quality Assurance',
    'DevOps',
    'Design',
    'Marketing',
    'Sales',
    'Human Resources',
    'Finance',
    'Operations'
  ];

  // Storage for submitted PM forms
  pmForms: PMFormItem[] = [];

  onSubmit() {
    if (this.fullName && this.employeeId && this.email) {
      const newPMForm: PMFormItem = {
        fullName: this.fullName,
        employeeId: this.employeeId,
        department: this.department,
        email: this.email,
        submittedDate: new Date()
      };

      this.pmForms.push(newPMForm);

      // Reset form
      this.fullName = '';
      this.employeeId = '';
      this.department = '';
      this.email = '';
    }
  }

  resetForm() {
    this.fullName = '';
    this.employeeId = '';
    this.department = '';
    this.email = '';
  }
}
