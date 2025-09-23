import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-basic-project-detail-form',
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './basic-project-detail-form.html',
  styleUrl: './basic-project-detail-form.css',
})
export class BasicProjectDetailForm {
  icon = faCircleInfo;

  priorityLevels = [
    { value: 'Low', color: 'green' },
    { value: 'Medium', color: 'orange' },
    { value: 'High', color: 'red' },
  ];

  projectName = '';
  projectDescription = '';
  projectPriority = '';
  startDate = '';
  endDate = '';

  onProjectNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.projectName = inputElement.value;
    console.log(this.projectName);
  }
  onProjectDescriptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.projectDescription = inputElement.value;
    console.log(this.projectDescription);
  }
  onProjectPriorityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.projectPriority = selectElement.value;
    console.log(this.projectPriority);
  }
  onProjectStartDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.startDate = inputElement.value;
    console.log(this.startDate);
  }
  onProjectEndDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.endDate = inputElement.value;
    console.log(this.endDate);
  }
}
