import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './home/home.component';
import { KabaddiLiveComponent } from './kabaddi-live/kabaddi-live.component';
import { KabaddiRecentComponent } from './kabaddi-recent/kabaddi-recent.component';
import { KabaddiComponent } from './kabaddi/kabaddi.component';
import { LeagueComponent } from './league/league.component';
import { LiveComponent } from './live/live.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';
import { RecentComponent } from './recent/recent.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component : FrontComponent},
  {path : 'app-front', component : FrontComponent},
  {path : 'app-home', component: HomeComponent},
  {path : 'app-welcome', component: WelcomeComponent},
  {path : 'app-live', component: LiveComponent},
  {path : 'app-recent', component: RecentComponent},
  {path : 'app-recent/:id', component: PlayersDetailsComponent},
  // {path : 'app-players-details', component : PlayersDetailsComponent},
  {path : 'app-kabaddi', component : KabaddiComponent},
  {path : 'app-kabaddi-live', component : KabaddiLiveComponent},
  {path : 'app-kabaddi-recent', component :  KabaddiRecentComponent},
  {path : 'app-league', component : LeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }