import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRouting } from './app.routing';
import { NavigatorComponent } from './navigator/navigator.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { WorkSkillsComponent } from './work-skills/work-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    ProjectsComponent,
    NavigatorComponent,
    SoftSkillsComponent,
    WorkSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
