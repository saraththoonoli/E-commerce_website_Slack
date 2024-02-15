import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcProfileComponent } from './ec-widget/Organism/ec-profile/ec-profile.component';
import { EcHomeComponent } from './ec-widget/Organism/ec-home/ec-home.component';
import { EcLoginComponent } from './ec-widget/Organism/ec-login/ec-login.component';
import { EcRegisterComponent } from './ec-widget/Organism/ec-register/ec-register.component';
import { EcProductComponent } from './ec-widget/Organism/ec-product/ec-product.component';
import { EcNavTwoComponent } from './ec-widget/Molecule/ec-nav-two/ec-nav-two.component';
import { EcFinalPageComponent } from './ec-widget/Organism/ec-final-page/ec-final-page.component';
import { EcCartComponent } from './ec-widget/Molecule/ec-cart/ec-cart.component';
import { AuthGuard } from './guard/auth.guard';
import { EcProductDetailsComponent } from './ec-widget/Molecule/ec-product-details/ec-product-details.component';

const routes: Routes = [
  { path: 'dashboard', component: EcProfileComponent },
  // { path: '', component: EcHomeComponent },
  { path: '', component: EcLoginComponent},
  { path: 'register', component: EcRegisterComponent },
  {path:'product',component:EcProductComponent},
  {path:'Purchase-now',component:EcFinalPageComponent,canActivate: [AuthGuard]},
  { path: 'cart', component: EcCartComponent },
  {path:'profile',component:EcProfileComponent},
  {path:'product-details/:id',component:EcProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
