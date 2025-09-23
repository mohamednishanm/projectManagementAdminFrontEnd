import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './milestone.html',
  styleUrls: ['./milestone.css']
})
export class Milestone {
  milestoneName: string = '';
  milestoneDescription: string = '';
  milestoneStartDate: string = '';
  milestoneEndDate: string = '';
  milestoneStatus: string = '';
 
  dropdownOpen: boolean = false;
 
  milestones: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
  }[] = [];
 
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
 
  selectStatus(status: string) {
    this.milestoneStatus = status;
    this.dropdownOpen = false;
  }
 
  addMilestone() {
    if (!this.milestoneName || !this.milestoneStartDate || !this.milestoneEndDate || !this.milestoneStatus) {
      alert('Please fill required fields: Name, Dates, and Status.');
      return;
    }
 
    this.milestones.push({
      name: this.milestoneName,
      description: this.milestoneDescription,
      startDate: this.milestoneStartDate,
      endDate: this.milestoneEndDate,
      status: this.milestoneStatus
    });
 
    // Reset form fields
    this.milestoneName = '';
    this.milestoneDescription = '';
    this.milestoneStartDate = '';
    this.milestoneEndDate = '';
    this.milestoneStatus = '';
  }
}
 
