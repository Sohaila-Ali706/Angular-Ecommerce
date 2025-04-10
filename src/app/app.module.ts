import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOneComponent } from './card-one/card-one.component';
import { InexComponent } from './pages/inex/inex.component';
import { CardtwoComponent } from './cardtwo/cardtwo.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { SharedService } from './services/shared.service';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistService } from './services/wishlist.service';
import { CartService } from './services/cart.service';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';

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
    FooterComponent,
    AboutComponent,
    ErrorComponent,
    CheckoutComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    ProfileComponent,
    SingleCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(),
    WishlistService, CartService, GlobalService, SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
