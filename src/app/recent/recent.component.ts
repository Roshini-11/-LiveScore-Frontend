import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent {
  scoreList: any;

  constructor(private ScoreService: AuthService, private router : Router,private ngService: NgxUiLoaderService) {
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
onSelect(score:any){
  console.log(score,'here')
  this.router.navigate(['/app-recent/:id',score]);
}
loader(){
  this.ngService.start();
  this.ngService.stop();
}

}
