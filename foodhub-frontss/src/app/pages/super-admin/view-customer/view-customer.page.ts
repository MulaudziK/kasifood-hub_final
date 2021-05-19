import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.page.html',
  styleUrls: ['./view-customer.page.scss'],
})
export class ViewCustomerPage implements OnInit {

  constructor(private viewAdminCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewAdminCtrl.dismiss();
  }

}
