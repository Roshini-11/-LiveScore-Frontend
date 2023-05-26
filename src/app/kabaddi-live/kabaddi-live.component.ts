import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kabaddi-live',
  templateUrl: './kabaddi-live.component.html',
  styleUrls: ['./kabaddi-live.component.css']
})
export class KabaddiLiveComponent {
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
