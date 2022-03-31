import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor ( private auth: AuthService, 
                private router: Router ) {
  }

  canActivate(): boolean {
    if ( ! this.auth.estaAutenticado() ) {
      console.log('NO AUTENTICADO UNAUTH');
      return true;
    }
    else {
      console.log('AUTENTICADO UNAUTH GUARD');
      this.router.navigateByUrl('/dashboard');
      return false;
    }
  }

}
