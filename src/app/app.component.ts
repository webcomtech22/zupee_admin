import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPanel_Zupee';

  sidebarOpen = true;

  sidebarToggler(){
    this.sidebarOpen = !this.sidebarOpen
  }
}
