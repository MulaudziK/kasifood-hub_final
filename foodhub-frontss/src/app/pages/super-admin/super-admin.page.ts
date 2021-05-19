import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import {AdminService} from 'src/app/services/admin.service';
import { ViewVendorPage } from './view-vendor/view-vendor.page';
import { EditVendorPage } from './edit-vendor/edit-vendor.page';
import { Location } from '@angular/common';
import { ViewCustomerPage } from './view-customer/view-customer.page';
import { EditCustomerPage } from './edit-customer/edit-customer.page';
import { EditDriverPage } from './edit-driver/edit-driver.page';
import { ViewDriverPage } from './view-driver/view-driver.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {


  shopDatas:any = [];
  custDatas:any = [];
  driverDatas:any = [];

  constructor(private modalCtrl: ModalController,
              private _adminService: AdminService,
              private alertModal: AlertController,
              private infoToast: ToastController,
              private location: Location) { }

  ngOnInit() {

    //calling service on initial load to show all shops in database

     this._adminService.getShops()
        .subscribe(data => this.shopDatas = data);
        console.log(this.shopDatas);

        this._adminService.getCusts()
        .subscribe(data => this.custDatas = data);
        console.log(this.custDatas);

        this._adminService.getDrivers()
        .subscribe(data => this.driverDatas = data);
        console.log(this.driverDatas);

  }

  

  //toast to confirm deleted item

  async showToast(shopDatas) {
    const toast = await this.infoToast.create({
      message: shopDatas.restuarant_name + ' has been deleted',
      duration: 1500
    });
    toast.present();
  }

 //toast to confirm deleted customer

 async showToast3(custDatas) {
  const toast = await this.infoToast.create({
    message: custDatas.name + ' ' + custDatas.surname  + ' has been deleted',
    duration: 1500
  });
  toast.present();
}

  //toast to confirm deleted driver 

  async showToast2(driverDatas) {
    const toast = await this.infoToast.create({
      message: driverDatas.name + ' ' + driverDatas + ' has been deleted',
      duration: 1500
    });
    toast.present();
  }
  

  //alert to confirm deletion of shop

  async presentAlertConfirm(shopData) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete ' + shopData.restuarant_name + ' ?</strong>' ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {

              //service called to delete shop

              this._adminService.removeShop(shopData.restuarant_id)
              .subscribe(data => {
                console.log(data);
              });
          
              // calling toast to show item has been deleted

              this.showToast(shopData);
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirms(custData) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete ' + custData.name + ' ' + custData.surname + ' ?</strong>' ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {

              //service called to delete shop

              this._adminService.removeCustomer(custData.customer_ID)
              .subscribe(data => {
                console.log(data);
              });
          
              // calling toast to show item has been deleted

              this.showToast3(custData);
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirmss(driverData) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete ' + driverData.name + ' ' + driverData.surname + ' ?</strong>' ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {

              //service called to delete driver

              this._adminService.removeDriver(driverData.driverID)
              .subscribe(data => {
                console.log(data);
              });
          
              // calling toast to show item has been deleted

              this.showToast2(driverData);
          }
        }
      ]
    });

    await alert.present();
  }
  //opens modal to create page to view shop

  async  _openModal(shopData) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        shopData: shopData
      }
    });

    return await modal.present();

  }

  //opens modal to create page to view customer

  async  _opennModal(custData) {

    const modal = await this.modalCtrl.create({
      component: ViewCustomerPage,
      componentProps: {
        custData: custData
      }
    });

    return await modal.present();

  }

  //opens modal to create page to view driver

  async  _opennnModal(driverData) {

    const modal = await this.modalCtrl.create({
      component: ViewDriverPage,
      componentProps: {
        driverData: driverData
      }
    });

    return await modal.present();

  }
  //opens modal to edit page to change shop attibutes

  async  _editModal(shopData) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        shopData: shopData
      }
    });

    return await modal.present();

  } 

  //opens modal to edit page to change customer attibutes

  async  _editsModal(custData) {

    const modal = await this.modalCtrl.create({
      component: EditCustomerPage,
      componentProps: {
        custData: custData
      }
    });

    return await modal.present();

  }

  //opens modal to edit page to change driver attibutes

  async  _editssModal(driverData) {

    const modal = await this.modalCtrl.create({
      component: EditDriverPage,
      componentProps: {
        driverData: driverData
      }
    });

    return await modal.present();

  }
  backButton() {
    this.location.back();
   }
  

}
