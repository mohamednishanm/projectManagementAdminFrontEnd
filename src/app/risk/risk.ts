import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RiskItem {
  id: number;
  title: string;
  description: string;
  category: string;
  probability: string;
  impact: string;
  mitigationPlan: string;
  progress: string;
  createdAt: Date;
}

@Component({
  selector: 'app-risk',
  imports: [CommonModule, FormsModule],
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

  // Storage for submitted risks - using regular array
  risks: RiskItem[] = [];
  nextId = 1;

  onSubmit() {
    // Validate required fields
    if (!this.riskTitle.trim() || !this.description.trim() || 
        !this.category || !this.probability || !this.impact || 
        !this.mitigationPlan.trim() || !this.progress) {
      alert('Please fill in all fields');
      return;
    }

    // Create new risk item
    const newRisk: RiskItem = {
      id: this.nextId++,
      title: this.riskTitle.trim(),
      description: this.description.trim(),
      category: this.category,
      probability: this.probability,
      impact: this.impact,
      mitigationPlan: this.mitigationPlan.trim(),
      progress: this.progress,
      createdAt: new Date()
    };

    // Add to risks array using push method
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

  deleteRisk(id: number) {
    // Find index of the risk to delete
    const index = this.risks.findIndex(risk => risk.id === id);
    if (index !== -1) {
      this.risks.splice(index, 1);
    }
  }

  getRiskPriorityClass(probability: string, impact: string): string {
    const isHigh = (level: string) => level === 'High';
    const isMedium = (level: string) => level === 'Medium';

    if (isHigh(probability) && isHigh(impact)) return 'critical';
    if ((isHigh(probability) && isMedium(impact)) || 
        (isMedium(probability) && isHigh(impact))) return 'high';
    if (isMedium(probability) && isMedium(impact)) return 'medium';
    return 'low';
  }
}