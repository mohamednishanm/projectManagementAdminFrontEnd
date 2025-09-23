import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar],
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
