import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdminPage } from './super-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminPage
  },
  {
    path: 'edit-vendor',
    loadChildren: () => import('./edit-vendor/edit-vendor.module').then( m => m.EditVendorPageModule)
  },
  {
    path: 'view-vendor',
    loadChildren: () => import('./view-vendor/view-vendor.module').then( m => m.ViewVendorPageModule)
  },  {
    path: 'edit-customer',
    loadChildren: () => import('./edit-customer/edit-customer.module').then( m => m.EditCustomerPageModule)
  },
  {
    path: 'view-customer',
    loadChildren: () => import('./view-customer/view-customer.module').then( m => m.ViewCustomerPageModule)
  },
  {
    path: 'edit-driver',
    loadChildren: () => import('./edit-driver/edit-driver.module').then( m => m.EditDriverPageModule)
  },
  {
    path: 'view-driver',
    loadChildren: () => import('./view-driver/view-driver.module').then( m => m.ViewDriverPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminPageRoutingModule {}
