import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output()closeevent:EventEmitter<boolean>=new EventEmitter()
  closesidebar(){
    this.closeevent.emit(true)
  }
}
