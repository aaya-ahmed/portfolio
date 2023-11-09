import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle:boolean=false
  title = 'portfolio';
  constructor(){}
  showsidebar(){
    this.toggle=true
  }
  close(){
    this.toggle=false
  }
}
