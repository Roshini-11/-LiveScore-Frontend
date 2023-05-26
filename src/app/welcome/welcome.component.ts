import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{NgxUiLoaderService}from 'ngx-ui-loader'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private ngService: NgxUiLoaderService){

  }

  loader(){
    this.ngService.start();
    this.ngService.stop();
  }

}
