import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

ngOninit(){

}

toggleSidebar(){
  this.toggleSidebarForMe.emit();
}
}
