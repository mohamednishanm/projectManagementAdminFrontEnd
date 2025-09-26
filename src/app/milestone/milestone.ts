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
    // Validation
    if (!this.milestoneName.trim()) {
      alert('Milestone name is required.');
      return;
    }

    if (!this.milestoneStartDate) {
      alert('Milestone start date is required.');
      return;
    }

    if (!this.milestoneEndDate) {
      alert('Milestone end date is required.');
      return;
    }

    if (!this.milestoneStatus) {
      alert('Please select a milestone status.');
      return;
    }

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(this.milestoneStartDate);
    const endDate = new Date(this.milestoneEndDate);

    if (startDate < today) {
      alert('Milestone start date cannot be in the past.');
      return;
    }

    if (endDate < startDate) {
      alert('Milestone end date must be on or after the start date.');
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