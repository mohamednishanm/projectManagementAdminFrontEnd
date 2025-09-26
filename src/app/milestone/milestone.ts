import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

interface MilestoneItem {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  submittedDate: Date;
}

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

  // Storage for submitted milestones
  milestones: MilestoneItem[] = [];

  onSubmit() {
    if (!this.milestoneName || !this.milestoneStartDate || !this.milestoneEndDate || !this.milestoneStatus) {
      alert('Please fill required fields: Name, Dates, and Status.');
      return;
    }

    const newMilestone: MilestoneItem = {
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
}