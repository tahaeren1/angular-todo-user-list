import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userPermissions } from './user-permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      console.log('userPermissions', userPermissions);
      console.log('route', route);
      const permissionName = route.data.permission
      console.log('permission-name', state.root.data.permission);

    // koşul sağlanırsa sayfa açılır
    // koşul sağlanmaz ise sayfa açılmaz. 
    // sayfa açılmadan önce sayfaya girişin kontrolü için CanActivate kullanırız
    // gireceğim sayfa ile permission eşleşiyosa sayfayı aç demek
    if (userPermissions.find(x=> x == permissionName)) {
      return true;
    }
    else {

      this.router.navigateByUrl('/unauthorized');

      return false;
    }


    
    
  }

}
