import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { AddTeamMembers } from './add-team-members/add-team-members';
import { Customer } from './customer/customer';
import { Risk } from './risk/risk';
import { BasicProjectDetailForm } from './basic-project-detail-form/basic-project-detail-form';
import { Pmform } from './pmform/pmform';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, AddTeamMembers, Customer, Risk, BasicProjectDetailForm,Pmform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectmanagementAdminfrontend');
  sidebarCollapsed = signal(false);

  onSidebarToggle(collapsed: boolean): void {
    this.sidebarCollapsed.set(collapsed);
    console.log('App received sidebar toggle:', collapsed);
  }
}
