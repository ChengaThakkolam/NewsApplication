import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { EverythingComponent } from './everything/everything.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TopHeadingsComponent } from './top-headings/top-headings.component';

const routes: Routes = [
  {path:'top-headings',component:TopHeadingsComponent},
  {path:'everything',component:EverythingComponent},
  {path:'business',component:BusinessComponent},
  {path:'sports',component:SportsComponent},
  {path:'science',component:ScienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
