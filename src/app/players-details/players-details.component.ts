import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent {
  scoreList: any;
  public scoreId!: number;
    constructor(private ScoreService: AuthService, private route: ActivatedRoute) {
    this.scoreList = [];
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        console.log(params);
        this.scoreList.push(params)
      })
  }
}
