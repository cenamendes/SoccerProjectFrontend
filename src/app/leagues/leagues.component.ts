import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  constructor( private service:SharedService) { }

  TeamsList!: any;
  CoachList !: any;
  StadiumList !: any;
  ClubName!:any;

  @Input()
  ClubList!: any;
  getfirstoflist!: number;
  sortqualquer!: number;
  games!: boolean;
  standings!: boolean;
  club !:string;

  
  
  ngOnInit(): void {
    this.getfirstoflist = 1;
    this.showTeamsList(this.getfirstoflist);
    this.standings = true;
    this.games = false;
    
  }

  showTeamsList(getfirstoflist: number){
    this.service.getTeamsList(getfirstoflist).subscribe(data=>{this.TeamsList=data.userDetail;
      let sum: number = this.TeamsList.map((a: { playerValue: any; }) => a.playerValue).reduce(function(a: any, b: any)
      {
        return a + b;
      });
      this.sortqualquer = sum;
      console.log(sum);
      console.log(this.TeamsList)
    });

  }

  showInfoTeam(club: string)
  {
    this.service.getClubInformation(club).subscribe(data=>{this.StadiumList=data.stadiumDetail;this.CoachList=data.coach;this.ClubName=data.club;
    });
  }
  

  //ABRIR PAGINAS
  openJ(){
    this.games = true;
    this.standings = false;
  }
  openS(){
    this.games = false;
    this.standings = true;
  }
 
}
