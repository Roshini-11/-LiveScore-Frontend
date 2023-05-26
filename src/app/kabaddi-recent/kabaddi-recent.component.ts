import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kabaddi-recent',
  templateUrl: './kabaddi-recent.component.html',
  styleUrls: ['./kabaddi-recent.component.css']
})
export class KabaddiRecentComponent {
  scoreList: any;

  constructor(private ScoreService: AuthService) {
    this.scoreList = [];
  }

  ngOnInit(): void {
      this.getAllScores();
  }

  getAllScores() {
    this.ScoreService.getScoreDetails2().subscribe((result: any) => {
      this.scoreList = result;
      console.log(this.scoreList);
    });
  }
}
