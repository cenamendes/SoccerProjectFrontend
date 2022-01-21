import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-soccer-home',
  templateUrl: './soccer-home.component.html',
  styleUrls: ['./soccer-home.component.css']
})
export class SoccerHomeComponent implements OnInit {

  
  constructor( private service:SharedService) { }

  @Input() 
  liga!:string;

  LeagueList!: any;
  ClubList!: any;
  TeamsList!: any;
  SortList!: any;

  
  getfirstoflist!: number;
  sortqualquer!: number;
  display!: boolean;
  displayfalse!: boolean;

  ngOnInit(): void {
    this.showAllLeagueList(); 
    this.getfirstoflist = 1;
    this.showTeamsList(this.getfirstoflist);
    this.display = false;
    this.displayfalse = true;
  }

  showAllLeagueList(){
    this.service.getAllLeagueList().subscribe(data=>{this.LeagueList=data.leagueDetails;
      console.log(this.LeagueList)
    });
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

onPress(liga: string) {
  this.display = true;
  this.displayfalse = false;

  this.service.getClubInfo(liga).subscribe(data=>{this.ClubList=data.clubDetail;
    console.log(this.ClubList)
  });

  }
}
