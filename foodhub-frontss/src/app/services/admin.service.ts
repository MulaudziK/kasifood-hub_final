import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'; // step 1
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name

  
  constructor(private http: HttpClient) { }
  login_url = 'http://localhost:3000/';
  reg_url_shop = 'http://localhost:3000/restu_register';
  reg_url_user = 'http://localhost:3000/cust_register';
  shop_url = 'http://localhost:3000/allrestuarant';
  driver_url = 'http://localhost:3000/alldriver';
  cust_url ='http://localhost:3000/all_customers';
  reg_url_driver ='http://localhost:3000/driver_register';

  




  public getProfile()
  {
    return this.http.get<any>(this.login_url);
  }


  public getShops() {
    return this.http.get<any>(this.shop_url);
  }

  public getCusts() {
    return this.http.get<any>(this.cust_url);
  }
  
  public getDrivers() {
    return this.http.get<any>(this.driver_url);
  }

  //update status details of driver

  updateDriver(driverData:any) {
    return this.http.put(`${'http://localhost:3000/driver_update'}/${driverData.driverID}`, driverData);
  }

//delete driver 
removeDriver(id:any) {
  const _urldel = 'http://localhost:3000/driverDelete/' + id;

  return this.http.delete(_urldel);
  
}

  //update status details of shop
  updateShop(shopData:any) {
    return this.http.put(`${'http://localhost:3000/restu_update'}/${shopData.restuarant_id}`, shopData);
  } 
    //delete shop for superadmin

  removeShop(id:any) {
    // const id: number = 1;
    const _urldel = 'http://localhost:3000/restuarant/' + id;

    return this.http.delete(_urldel);
  
  }

  //delete customer

  removeCustomer(id:any){
    const _urldel = 'http://localhost:3000/customerdelete/' + id;

    return this.http.delete(_urldel);

  }

  getVendor() {
    return this.http.get<any>(this. reg_url_shop);
  } 


   getUser() {
    return this.http.get<any>(this. reg_url_user);
  } 

  
  public createProfile(addven:any)
  {
    return this.http.post<any>(this. reg_url_shop, addven, {});
  }

   public createProfileUser(addven:any)
  {
    return this.http.post<any>(this. reg_url_user, addven, {});
  }
  public createProfileDriver(addven:any)
  {
    return this.http.post<any>(this. reg_url_driver, addven, {});
  }
}