import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, DatePipe],
  templateUrl: './milestone.html',
  styleUrls: ['./milestone.css']
})
export class Milestone {
  // Basic form variables
  milestoneName = '';
  milestoneDescription = '';
  milestoneStartDate = '';
  milestoneEndDate = '';
  milestoneStatus = '';

  // Dropdown options
  statusOptions = ['Pending', 'In Progress', 'Completed', 'On Hold'];

  // Multiple milestones storage
  milestones: any[] = [];

  onSubmit() {
    if (!this.milestoneName || !this.milestoneStartDate || !this.milestoneEndDate || !this.milestoneStatus) {
      alert('Please fill required fields: Name, Dates, and Status.');
      return;
    }

    const newMilestone = {
      name: this.milestoneName,
      description: this.milestoneDescription,
      startDate: this.milestoneStartDate,
      endDate: this.milestoneEndDate,
      status: this.milestoneStatus,
      submittedDate: new Date()
    };

    this.milestones.push(newMilestone);

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.milestoneName = '';
    this.milestoneDescription = '';
    this.milestoneStartDate = '';
    this.milestoneEndDate = '';
    this.milestoneStatus = '';
  }

  clearAllMilestones() {
    this.milestones = [];
    this.resetForm();
  }
}