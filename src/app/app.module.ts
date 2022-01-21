import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerHomeComponent } from './soccer-home/soccer-home.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaguesComponent } from './leagues/leagues.component';
import { ClubInformationComponent } from './club-information/club-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerHomeComponent,
    LeaguesComponent,
    ClubInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
