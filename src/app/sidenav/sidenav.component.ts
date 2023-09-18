import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isSubMenuOpen = false;
  isAboutUsSubMenuOpen = false; 


  toggleSubMenu(event:Event) {
    event.preventDefault(); // Prevent the default behavior (e.g., navigation)
    event.stopPropagation(); // Stop event propagation to prevent immediate closure

    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  toggleAboutUsSubMenu(event:Event) {
    event.preventDefault(); // Prevent the default behavior (e.g., navigation)
    event.stopPropagation(); 
    this.isAboutUsSubMenuOpen = !this.isAboutUsSubMenuOpen;
  }
}
