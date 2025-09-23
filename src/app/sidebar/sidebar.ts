import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  isCollapsed = false;
  isMobileOpen = false;
  
  ngOnInit(): void {
    // Restore collapsed state from localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true' && window.innerWidth > 768) {
      this.isCollapsed = true;
    }
    // Emit initial state
    setTimeout(() => {
      this.sidebarToggled.emit(this.isCollapsed);
      console.log('Initial sidebar state:', this.isCollapsed);
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Close mobile sidebar when resizing to desktop
    if (window.innerWidth > 768) {
      this.isMobileOpen = false;
    }
  }

  dashboardRedirect(): void {
    // Add your dashboard redirect logic here
    console.log('Dashboard redirect clicked');
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
    this.sidebarToggled.emit(this.isCollapsed);
    console.log('Sidebar toggled:', this.isCollapsed);
  }

  toggleMobileSidebar(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  onNavItemClick(event: Event): void {
    // Remove active class from all nav items and add to clicked item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    (event.currentTarget as HTMLElement).classList.add('active');
  }
}
