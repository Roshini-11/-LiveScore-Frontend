import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {
  scoreList: any;

  constructor(private ScoreService: AuthService,
    private ngService: NgxUiLoaderService) {
    this.scoreList = [];
  }

  ngOnInit(): void { 
      this.getAllScores();
  }

  getAllScores() {
    // this.ngService.start();
    this.ScoreService.getScoreDetails().subscribe((result: any) => {
      this.scoreList = result;
      console.log(this.scoreList);
    });
  }
}

