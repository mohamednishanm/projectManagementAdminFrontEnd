import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-team-members',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './add-team-members.html',
  styleUrls: ['./add-team-members.css']
})
export class AddTeamMembers {
  // Basic form fields
  memberName = '';
  memberEmail = '';
  memberRole = '';
  memberDepartment = '';
  memberPhone = '';

  // Dropdown options
  roles = [
    'Project Manager',
    'Developer',
    'Designer',
    'Tester',
    'Business Analyst',
    'Team Lead'
  ];

  departments = [
    'Information Technology',
    'Human Resources',
    'Finance',
    'Marketing',
    'Operations',
    'Engineering'
  ];

  // Storage for submitted team members
  teamMembers: any[] = [];

  onSubmit() {
    // Validation
    if (!this.memberName.trim()) {
      alert('Member name is required.');
      return;
    }

    if (!this.memberEmail.trim()) {
      alert('Email address is required.');
      return;
    }

    if (!this.memberRole) {
      alert('Please select a role.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.memberEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Phone validation (optional but if provided, must be valid)
    if (this.memberPhone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(this.memberPhone.replace(/[\s\-\(\)]/g, ''))) {
        alert('Please enter a valid phone number.');
        return;
      }
    }

    const newMember = {
      name: this.memberName,
      email: this.memberEmail,
      role: this.memberRole,
      department: this.memberDepartment,
      phone: this.memberPhone,
      submittedDate: new Date()
    };

    this.teamMembers.push(newMember);

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.memberName = '';
    this.memberEmail = '';
    this.memberRole = '';
    this.memberDepartment = '';
    this.memberPhone = '';
  }

  clearAllMembers() {
    this.teamMembers = [];
    this.resetForm();
  }
}
