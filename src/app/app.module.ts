import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscoverComponent } from './components/discover/discover.component';
import {HttpClientModule } from '@angular/common/http';
import { SubChannelComponent } from './components/sub-channel/sub-channel.component';
import { HomeComponent } from './components/home/home.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


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
    ProfileComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
