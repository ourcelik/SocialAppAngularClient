import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscoverComponent } from './components/discover/discover.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubChannelComponent } from './components/discover/sub-channel/sub-channel.component';
import { HomeComponent } from './components/home/home.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/registration/login/login.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProfileNotificationSettingsComponent } from './components/profile/profile-notification-settings/profile-notification-settings.component';
import { PreferComponent } from './components/profile/prefer/prefer.component';
import { IsSubscribedPipe } from './pipes/is-subscribed.pipe';
import { ChannelContentComponent } from './components/discover/channel-content/channel-content.component';
import { DiscoverCardComponent } from './components/discover/discover-card/discover-card.component';
import { SubscribeChannelComponent } from './components/discover/subscribe-channel/subscribe-channel.component';
import { SubChannelCardComponent } from './components/discover/sub-channel-card/sub-channel-card.component';
import { ChannelNewPostComponent } from './components/discover/channel-new-post/channel-new-post.component';
import { PostComponent } from './components/discover/post/post.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { UserStatisticComponent } from './components/profile/user-statistic/user-statistic.component';
import { UserPhotoComponent } from './components/profile/user-photo/user-photo.component';
import { UserPostComponent } from './components/profile/user-post/user-post.component';
import { ProfileContentComponent } from './components/profile/profile-content/profile-content.component';
import { DiscoverCardsComponent } from './components/discover/discover-cards/discover-cards.component';
import { SubChannelCardsComponent } from './components/discover/sub-channel-cards/sub-channel-cards.component';
import { PostDetailComponent } from './components/discover/post-detail/post-detail.component';
import { CommentsComponent } from './components/discover/comments/comments.component';
import { CommentComponent } from './components/discover/comment/comment.component';
import { RealtimeNotificationService } from './services/realtime-notification.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DiscoverComponent,
    SubChannelComponent,
    HomeComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileNotificationSettingsComponent,
    PreferComponent,
    IsSubscribedPipe,
    ChannelContentComponent,
    DiscoverCardComponent,
    SubscribeChannelComponent,
    SubChannelCardComponent,
    ChannelNewPostComponent,
    PostComponent,
    ProfileInfoComponent,
    UserStatisticComponent,
    UserPhotoComponent,
    UserPostComponent,
    ProfileContentComponent,
    DiscoverCardsComponent,
    SubChannelCardsComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ToastrModule.forRoot({
     positionClass:"toast-bottom-right"
   }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  /**
   *
   */
  constructor(private realtimeNotificationService:RealtimeNotificationService ) {

  }
 }
