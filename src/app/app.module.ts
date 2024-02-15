import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcMainLayoutComponent } from './Layout/ec-main-layout/ec-main-layout.component';
import { EcButtonComponent } from './ec-widget/Atom/ec-button/ec-button.component';
import { EcInputBoxComponent } from './ec-widget/Atom/ec-input-box/ec-input-box.component';
import { EcNavBarComponent } from './ec-widget/Molecule/ec-nav-bar/ec-nav-bar.component';
import { EcHomeComponent } from './ec-widget/Organism/ec-home/ec-home.component';
import { EcLoginComponent } from './ec-widget/Organism/ec-login/ec-login.component';
import { EcRegisterComponent } from './ec-widget/Organism/ec-register/ec-register.component';
import { EcHeadComponent } from './ec-widget/Organism/ec-head/ec-head.component';
import { EcFooterComponent } from './ec-widget/Organism/ec-footer/ec-footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcNavTwoComponent } from './ec-widget/Molecule/ec-nav-two/ec-nav-two.component';
import { HttpClientModule } from '@angular/common/http';
import { EcProfileComponent } from './ec-widget/Organism/ec-profile/ec-profile.component';
import { EcProductComponent } from './ec-widget/Organism/ec-product/ec-product.component';
import { EcCarouselComponent } from './ec-widget/Molecule/ec-carousel/ec-carousel.component';
import { EcBackToTopComponent } from './ec-widget/Atom/ec-back-to-top/ec-back-to-top.component';
import { EcLastFooterComponent } from './ec-widget/Molecule/ec-last-footer/ec-last-footer.component';
import { EcFinalPageComponent } from './ec-widget/Organism/ec-final-page/ec-final-page.component';
import { EcCartComponent } from './ec-widget/Molecule/ec-cart/ec-cart.component';
import { EcProductDetailsComponent } from './ec-widget/Molecule/ec-product-details/ec-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EcMainLayoutComponent,
    EcButtonComponent,
    EcInputBoxComponent,
    EcNavBarComponent,
    EcHomeComponent,
    EcLoginComponent,
    EcRegisterComponent,
    EcHeadComponent,
    EcFooterComponent,
    EcNavTwoComponent,
    EcProfileComponent,
    EcProductComponent,
    EcCarouselComponent,
    EcBackToTopComponent,
    EcLastFooterComponent,
    EcFinalPageComponent,
    EcCartComponent,
    EcProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
