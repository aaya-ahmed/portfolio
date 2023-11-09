import { Component, EventEmitter, HostListener, Output } from '@angular/core';

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
  @HostListener('window:resize',['$event.target'])
  resize($event:any){
    if($event.innerWidth>980){
      this.closesidebar();
    }
  }
}
