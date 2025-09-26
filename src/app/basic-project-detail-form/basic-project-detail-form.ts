import { Component } from '@angular/core';
import { NgIf, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-basic-project-detail-form',
  standalone: true,
  imports: [NgIf, UpperCasePipe, TitleCasePipe, DatePipe],
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
    if (this.projectName && this.projectDescription) {
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
