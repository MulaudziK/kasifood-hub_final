import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { OverviewPageModule} from './pages/vendor/overview/overview.module';
import { ExtrasPageModule } from './pages/extras/extras.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Stripe } from '@ionic-native/stripe/ngx';
// import { AuthGuard } from './gaurds/auth.guard';

import { ProfilePageModule } from './pages/vendor/profile/profile.module';
import { AddMenuPageModule} from './pages/vendor/add-menu/add-menu.module';
import { AdminauthGuard } from './gaurds/adminauth.guard';
import { AuthenticationService } from './services/authentication.service';
import { ServiceproviderService } from './services/serviceprovider.service';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/storage';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewVendorPage} from './pages/super-admin/view-vendor/view-vendor.page';
import { EditVendorPage } from './pages/super-admin/edit-vendor/edit-vendor.page';

import { EditDriverPage } from './pages/super-admin/edit-driver/edit-driver.page';
import { ViewDriverPage } from './pages/super-admin/view-driver/view-driver.page';

import { EditCustomerPage } from './pages/super-admin/edit-customer/edit-customer.page';
import { ViewCustomerPage } from './pages/super-admin/view-customer/view-customer.page'

// import { ActionsheetComponent } from './components/actionsheet/actionsheet.component';




@NgModule({

  declarations: [AppComponent,
    EditVendorPage,
    ViewVendorPage,
    EditDriverPage,
    ViewDriverPage,
    EditCustomerPage,
    ViewCustomerPage],
  entryComponents: [
    EditVendorPage,
    ViewVendorPage,
    EditDriverPage,
    ViewDriverPage,
    EditCustomerPage,
    ViewCustomerPage],

  imports: [BrowserModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OverviewPageModule,
    CartModalPageModule,
    AddMenuPageModule,
    ExtrasPageModule,
    HttpClientModule,
    ProfilePageModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    StatusBar,
    PostProvider,
    ServiceproviderService,
    SplashScreen, // NativeStorage,
    Stripe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
