import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

interface RiskItem {
  id: number;
  title: string;
  description: string;
  category: string;
  probability: string;
  impact: string;
  mitigationPlan: string;
  progress: string;
  submittedDate: Date;
}

@Component({
  selector: 'app-risk',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './risk.html',
  styleUrl: './risk.css'
})
export class Risk {
  // Form data
  riskTitle = '';
  description = '';
  category = '';
  probability = '';
  impact = '';
  mitigationPlan = '';
  progress = '';

  // Options for dropdowns
  categories = ['Schedule', 'Cost', 'Resource', 'Technical', 'External'];
  probabilityLevels = ['Low', 'Medium', 'High'];
  impactLevels = ['Low', 'Medium', 'High'];
  progressOptions = ['Not Started', 'In Progress', 'Completed', 'On Hold'];

  // Storage for submitted risks
  risks: any[] = [];

  onSubmit() {
    // Validate required fields
    if (!this.riskTitle.trim() || !this.description.trim() ||
        !this.category || !this.probability || !this.impact ||
        !this.mitigationPlan.trim() || !this.progress) {
      alert('Please fill in all fields');
      return;
    }

    const newRisk = {
      title: this.riskTitle,
      description: this.description,
      category: this.category,
      probability: this.probability,
      impact: this.impact,
      mitigationPlan: this.mitigationPlan,
      progress: this.progress,
      submittedDate: new Date()
    };

    this.risks.push(newRisk);

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.riskTitle = '';
    this.description = '';
    this.category = '';
    this.probability = '';
    this.impact = '';
    this.mitigationPlan = '';
    this.progress = '';
  }

  clearAllRisks() {
    this.risks = [];
    this.resetForm();
  }
}