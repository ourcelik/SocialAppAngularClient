import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SubChannelComponent } from './components/sub-channel/sub-channel.component';
import { LoginGuard } from './guards/login.guard';
import { NotLoginGuard } from './guards/not-login.guard';

const routes: Routes = [
  {path:"discover",component:DiscoverComponent},
  {path:"discover/:mainChannelId",component:SubChannelComponent},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent,canActivate:[LoginGuard]},
  {path:"profile/edit",component:ProfileEditComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent,canActivate:[NotLoginGuard]},
  {path:"register",component:RegisterComponent,canActivate:[NotLoginGuard]},
  {path:"",component:HomeComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
