import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InexComponent } from './pages/inex/inex.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path :"" , component: InexComponent } ,
  { path :"contact" , component: ContactComponent},
  { path :"wishlist" , component: WishlistComponent},
  { path :"signup" , component: SignupComponent},
  { path :"login" , component: LoginComponent},
  { path :"about" , component: AboutComponent},
  { path :"**" , component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
