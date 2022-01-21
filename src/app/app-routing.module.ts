import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubInformationComponent } from './club-information/club-information.component';
import { LeaguesComponent } from './leagues/leagues.component';

const routes: Routes = [
  {path: 'leagues', component:LeaguesComponent}, 
  {path: 'clubs', component:ClubInformationComponent}
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
