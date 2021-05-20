import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private rout: Router,
    private location: Location) { }

  ngOnInit() {
  }
  adminSignUp() {
    this.rout.navigateByUrl('/signupadmin');
  }
  custSignUp() {
    this.rout.navigateByUrl('/singupcust');
  }
  driverSignup() {
    this.rout.navigateByUrl('/signupdriver');
  }
  backButton() {
    this.location.back();
   }
}
