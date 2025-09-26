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
    if (this.memberName && this.memberRole && this.memberEmail) {
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
