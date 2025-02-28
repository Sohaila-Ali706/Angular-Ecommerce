import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOneComponent } from './card-one/card-one.component';
import { InexComponent } from './pages/inex/inex.component';
import { CardtwoComponent } from './cardtwo/cardtwo.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    InexComponent,
    CardtwoComponent,
    CardThreeComponent,
    CountdownTimerComponent,
    WishlistComponent,
    ContactComponent,
    FeaturedCardComponent,
    SpeakerComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
