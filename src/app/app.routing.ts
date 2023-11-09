import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NgModule } from "@angular/core";
import { SoftSkillsComponent } from "./soft-skills/soft-skills.component";
import { WorkSkillsComponent } from "./work-skills/work-skills.component";

const routes:Routes=[
    {path:'',component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'soft-skills',component:SoftSkillsComponent} ,
    {path:'work-skills',component:WorkSkillsComponent} 

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}
)
export class AppRouting{}