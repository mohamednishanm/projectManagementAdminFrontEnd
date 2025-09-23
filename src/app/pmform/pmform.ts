import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pmform',
  standalone: true,   // make sure if using Angular 15+ standalone
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // <-- add JsonPipe here
  templateUrl: './pmform.html',
  styleUrls: ['./pmform.css'],
})
export class Pmform {
  pmForm: FormGroup;
  roles = ['Manager', 'Team Lead', 'Developer'];
  privileges = ['Read', 'Write', 'Execute'];

  submittedData: any = null; // for displaying after submit

  constructor(private fb: FormBuilder) {
    this.pmForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      employeeId: ['', Validators.required],
      department: [''],
      designation: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      role: [''],
      privileges: [[]],
      experience: [0],
      certifications: [''],
      workload: [0],
      notes: ['']
    });
  }

  onPrivilegeChange(event: any) {
    const selectedPrivileges = this.pmForm.get('privileges')?.value || [];
    if (event.target.checked) {
      selectedPrivileges.push(event.target.value);
    } else {
      const index = selectedPrivileges.indexOf(event.target.value);
      if (index > -1) selectedPrivileges.splice(index, 1);
    }
    this.pmForm.get('privileges')?.setValue(selectedPrivileges);
  }

  onSubmit(formValue: any) {
    this.submittedData = formValue; // store data to show below form
    console.log(formValue);
  }
}
