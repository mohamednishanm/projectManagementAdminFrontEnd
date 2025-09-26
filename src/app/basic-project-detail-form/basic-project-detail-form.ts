import { Component } from '@angular/core';
import { NgIf, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

interface ProjectItem {
  name: string;
  description: string;
  priority: string;
  submittedDate: Date;
}

@Component({
  selector: 'app-basic-project-detail-form',
  imports: [NgIf, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-project-detail-form.html',
  styleUrl: './basic-project-detail-form.css',
})
export class BasicProjectDetailForm {
  // Basic form variables
  projectName = '';
  projectDescription = '';
  projectPriority = '';

  // Dropdown options for priority
  priorities = [
    'Low',
    'Medium',
    'High',
    'Critical'
  ];

  // Storage for submitted projects
  projects: ProjectItem[] = [];

  onSubmit() {
    if (this.projectName && this.projectDescription) {
      const newProject: ProjectItem = {
        name: this.projectName,
        description: this.projectDescription,
        priority: this.projectPriority,
        submittedDate: new Date()
      };

      this.projects.push(newProject);

      // Reset form
      this.projectName = '';
      this.projectDescription = '';
      this.projectPriority = '';
    }
  }

  resetForm() {
    this.projectName = '';
    this.projectDescription = '';
    this.projectPriority = '';
  }
}
