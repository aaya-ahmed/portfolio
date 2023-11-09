import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('projects')projects:ElementRef|undefined;
  projectnum=6;
  counter=0;
goleft(){
  if(this.counter<this.projectnum-1){
    this.counter++;
    this.projects?.nativeElement.setAttribute('style', `margin-left:-${100*this.counter}%`);
  }
}
goright(){
  if(this.counter>0){
    this.counter--;
    this.projects?.nativeElement.setAttribute('style', `margin-left:-${100*this.counter}%`);
  }
}

}
