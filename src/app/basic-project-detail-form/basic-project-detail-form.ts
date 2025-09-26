import { Component } from '@angular/core';
import { NgIf, UpperCasePipe, TitleCasePipe, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-basic-project-detail-form',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-project-detail-form.html',
  styleUrl: './basic-project-detail-form.css',
})
export class BasicProjectDetailForm {
  // Basic form variables
  projectName = '';
  projectDescription = '';
  projectPriority = '';
  projectStartDate = '';
  projectEndDate = '';
  projectStatus = '';

  // Dropdown options for priority
  priorities = [
    'Low',
    'Medium',
    'High',
    'Critical'
  ];

  // Dropdown options for status
  statusOptions = [
    'Planning',
    'In Progress',
    'On Hold',
    'Completed',
    'Cancelled'
  ];

  // Single project storage
  project: any = null;

  onSubmit() {
    // Validation
    if (!this.projectName.trim()) {
      alert('Project name is required.');
      return;
    }

    if (!this.projectDescription.trim()) {
      alert('Project description is required.');
      return;
    }

    if (!this.projectPriority) {
      alert('Please select a project priority.');
      return;
    }

    if (!this.projectStartDate) {
      alert('Project start date is required.');
      return;
    }

    if (!this.projectEndDate) {
      alert('Project end date is required.');
      return;
    }

    if (!this.projectStatus) {
      alert('Please select a project status.');
      return;
    }

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(this.projectStartDate);
    const endDate = new Date(this.projectEndDate);

    if (startDate < today) {
      alert('Project start date cannot be in the past.');
      return;
    }

    if (endDate < startDate) {
      alert('Project end date must be on or after the start date.');
      return;
    }

    this.project = {
      name: this.projectName,
      description: this.projectDescription,
      priority: this.projectPriority,
      startDate: this.projectStartDate,
      endDate: this.projectEndDate,
      status: this.projectStatus,
      submittedDate: new Date()
    };
  }

  resetForm() {
    this.projectName = '';
    this.projectDescription = '';
    this.projectPriority = '';
    this.projectStartDate = '';
    this.projectEndDate = '';
    this.projectStatus = '';
    this.project = null;
  }
}
