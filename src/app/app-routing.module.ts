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
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },


  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: InexComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'all-products', component: AllProductsComponent, canActivate: [AuthGuard] },
  { path: 'category/:catName', component: SingleCategoryComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'all-products/:cardId', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },


  { path: '**', component: ErrorComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
