import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Milestone } from './milestone/milestone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Milestone],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectmanagementAdminfrontend');
}
