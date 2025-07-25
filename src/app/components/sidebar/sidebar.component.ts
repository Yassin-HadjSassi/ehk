import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/category', title: 'Category',  icon: 'category', class: '' },
    { path: '/forme', title: 'Forme',  icon: 'view_in_ar', class: '' },
    { path: '/article', title: 'Articles',  icon: 'storefront', class: '' },
    { path: '/emplacement', title: 'Emplacement',  icon: 'place', class: '' },
    { path: '/stock', title: 'Stock',  icon: 'inventory', class: '' },
    { path: '/order', title: 'Orders',  icon: 'shopping_bag', class: '' },
    { path: '/user', title: 'Users',  icon: 'group', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
