import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-team-members',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-team-members.html',
  styleUrls: ['./add-team-members.css']
})
export class AddTeamMembers {
  memberName: string = '';
  memberEmail: string = '';
  selectedRole: string = '';
  dropdownOpen: boolean = false;

  teamMembers: { name: string; role: string }[] = [];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.dropdownOpen = false;
  }

  addMember() {
    if (!this.memberName || !this.selectedRole) {
      alert('Please enter a name and select a role.');
      return;
    }

    this.teamMembers.push({
      name: this.memberName,
      role: this.selectedRole
    });

    // Reset form fields
    this.memberName = '';
    this.memberEmail = '';
    this.selectedRole = '';
  }
}
