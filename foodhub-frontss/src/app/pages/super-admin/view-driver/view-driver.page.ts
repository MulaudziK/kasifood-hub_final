import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.page.html',
  styleUrls: ['./view-driver.page.scss'],
})
export class ViewDriverPage implements OnInit {

  constructor(private viewAdminCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewAdminCtrl.dismiss();
  }


}
