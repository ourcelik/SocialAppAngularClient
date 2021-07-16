import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { SubChannelComponent } from './components/sub-channel/sub-channel.component';

const routes: Routes = [
  {path:"discover",component:DiscoverComponent},
  {path:"discover/:mainChannelId",component:SubChannelComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
