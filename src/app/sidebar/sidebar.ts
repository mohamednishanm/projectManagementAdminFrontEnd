import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  isCollapsed = false;
  isMobileOpen = false;
  
  ngOnInit(): void {
    // Restore collapsed state from localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true' && window.innerWidth > 768) {
      this.isCollapsed = true;
    }
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
