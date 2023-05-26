import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  scoreList: any;

  constructor(private ScoreService: AuthService) {
    this.scoreList = [];
  }

  ngOnInit(): void {
      this.getAllScores();
  }

  getAllScores() {
    this.ScoreService.getScoreDetails().subscribe((result: any) => {
      this.scoreList = result;
      console.log(this.scoreList);
    });
  }
}
