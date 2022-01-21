import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SharedService 
{
  readonly UrlSoccer ="https://localhost:44336/api";

  constructor(private http:HttpClient) { }

  getAllLeagueList(){
    return this.http.get<any>(this.UrlSoccer + '/League/getAllLeagues');
  }

  getTeamsList(teamsId: number){
    return this.http.get<any>(this.UrlSoccer + '/Player/getPlayers/value?Team=' + teamsId);
  }

  getClubInfo(league: string){
    return this.http.get<any>(this.UrlSoccer + '/Club/getClub?liga=' + league);
  }
  
  getClubInformation(team: string){
    return this.http.get<any>(this.UrlSoccer + '/Club/getClubInfo?nome_clube=' + team);
  }


}