import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

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

  // Single PM form storage
  pmForm: any = null;

  onSubmit() {
    if (this.fullName && this.employeeId && this.email) {
      this.pmForm = {
        fullName: this.fullName,
        employeeId: this.employeeId,
        department: this.department,
        email: this.email,
        submittedDate: new Date()
      };
    }
  }

  resetForm() {
    this.fullName = '';
    this.employeeId = '';
    this.department = '';
    this.email = '';
    this.pmForm = null;
  }
}
