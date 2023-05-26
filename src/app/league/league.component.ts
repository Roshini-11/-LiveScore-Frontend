import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent {
  scoreList: any;
  public scoreId!: number;
    constructor(private ScoreService: AuthService, private route: ActivatedRoute) {
    this.scoreList = [];
  }
  ngOnInit(): void {
    this.getAllScores();
}
  getAllScores() {
    // this.ngService.start();
    this.ScoreService.getScoreDetails3().subscribe((result: any) => {
      this.scoreList = result;
      console.log(this.scoreList);
    });
  }
  
}
