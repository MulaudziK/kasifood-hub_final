import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {

  custData:any;

  constructor(private editAdminCtrl : ModalController,
    private infoToast : ToastController,
    private _adminService : AdminService) { }

  ngOnInit() {
  }

  async showToast(custData) {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved for: ' + custData.name,
      duration: 1500
    });
    toast.present();
  }

  update() {

    this._adminService.updateShop(this.custData)
        .subscribe(data => this.custData = data);

    this.editAdminCtrl.dismiss()
    
  }

  dismiss() {
    this.editAdminCtrl.dismiss();
  }

}
