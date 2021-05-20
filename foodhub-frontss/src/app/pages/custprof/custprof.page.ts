import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-custprof',
  templateUrl: './custprof.page.html',
  styleUrls: ['./custprof.page.scss'],
})
export class CustprofPage implements OnInit {
  custDatas:any = [];

  constructor(private location: Location,
    private _adminService: AdminService) { }

  ngOnInit() {

    this._adminService.getCusts()
        .subscribe(data => this.custDatas = data);
        console.log(this.custDatas);

  }
  back(){
    this.location.back();
  }

}
