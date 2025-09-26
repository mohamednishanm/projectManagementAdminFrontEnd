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

  isSubmitted = false;
  submissionDate = new Date();

  onSubmit() {
    if (this.memberName && this.memberRole && this.memberEmail) {
      this.isSubmitted = true;
      this.submissionDate = new Date();
    }
  }

  resetForm() {
    this.memberName = '';
    this.memberEmail = '';
    this.memberRole = '';
    this.memberDepartment = '';
    this.memberPhone = '';
    this.isSubmitted = false;
  }
}
