import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LiveComponent } from './live/live.component';
import {HttpClientModule} from '@angular/common/http';
import { RecentComponent } from './recent/recent.component';
import { PlayersComponent } from './players/players.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';
import { FrontComponent } from './front/front.component';
import { KabaddiComponent } from './kabaddi/kabaddi.component';
import { KabaddiLiveComponent } from './kabaddi-live/kabaddi-live.component';
import { KabaddiRecentComponent } from './kabaddi-recent/kabaddi-recent.component';

import{NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION} from 'ngx-ui-loader';
import { LeagueComponent } from './league/league.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig={
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LiveComponent,
    RecentComponent,
    PlayersComponent,
    PlayersDetailsComponent,
    FrontComponent,
    KabaddiComponent,
    KabaddiLiveComponent,
    KabaddiRecentComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
