import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.page.html',
  styleUrls: ['./edit-driver.page.scss'],
})
export class EditDriverPage implements OnInit {

  driverData: any;

  constructor(private editAdminCtrl : ModalController,
    private infoToast : ToastController,
    private _adminService : AdminService) { }

  ngOnInit() {
  }

  async showToast(driverData) {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved for: ' + driverData.name,
      duration: 1500
    });
    toast.present();
  }

  update() {

    this._adminService.updateDriver(this.driverData)
        .subscribe(data => this.driverData = data);

    this.editAdminCtrl.dismiss()
    
  }

  dismiss() {
    this.editAdminCtrl.dismiss();
  }


}
