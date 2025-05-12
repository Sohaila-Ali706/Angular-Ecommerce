import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InexComponent } from './pages/inex/inex.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path :"" , component: InexComponent } ,
  { path :"contact" , component: ContactComponent},
  { path :"wishlist" , component: WishlistComponent},
  { path :"signup" , component: SignupComponent},
  { path :"login" , component: LoginComponent},
  { path :"about" , component: AboutComponent},
  { path : "checkout" , component:CheckoutComponent},
  { path : "cart" , component:CartComponent},
  { path : "all-products" , component:AllProductsComponent},
  { path : "category/:catName" , component:SingleCategoryComponent},
  { path : "profile" , component:ProfileComponent},
  { path : "all-products/:cardId" , component:ProductDetailsComponent},
  { path: "admin-dashboard" , component:AdminDashboardComponent},
  { path :"**" , component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
