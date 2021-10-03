import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelContentComponent } from './components/discover/channel-content/channel-content.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/registration/login/login.component';
import { PreferComponent } from './components/profile/prefer/prefer.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileNotificationSettingsComponent } from './components/profile/profile-notification-settings/profile-notification-settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { SubChannelComponent } from './components/discover/sub-channel/sub-channel.component';
import { LoginGuard } from './guards/login.guard';
import { NotLoginGuard } from './guards/not-login.guard';

const routes: Routes = [
  {path:"discover",component:DiscoverComponent},
  {path:"discover/:mainChannelId",component:SubChannelComponent},
  {path:"home",component:HomeComponent},
  {path:"discover/:mainChannelId/:SubChannelId/content",component:ChannelContentComponent},
  {path:"profile",component:ProfileComponent,canActivate:[LoginGuard]},
  {path:"profile/notificationSettings",component:ProfileNotificationSettingsComponent,canActivate:[LoginGuard]},
  {path:"profile/preferSettings",component:PreferComponent,canActivate:[LoginGuard]},
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
