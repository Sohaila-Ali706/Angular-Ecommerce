import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InexComponent } from './pages/inex/inex.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path :"" , component: InexComponent } ,
  { path :"contact" , component: ContactComponent},
  { path :"wishlist" , component: WishlistComponent},
  { path :"signup" , component: SignupComponent},
  { path :"login" , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
