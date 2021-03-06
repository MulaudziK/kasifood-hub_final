import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router, private authenticationService: AuthenticationService) { }
  canActivate(): boolean {
 
   return this.authenticationService.isAuthenticated();

   }
}
