import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> | Promise<User[]> {

    // bu resolver sayesinde sayfa daha yüklenemeden resolver araya girecek sayfanın ihtiyacı olan veriyi çekip sayfaya hazır bir şekilde gönderecek
    // resolverlar route tanımlanırlar bu sayede ilgili sayfaya bir istek geldiğinde data resolve olup sayfaya gönderilir.


    if(state.url === '/user-list') {
      console.log('state', state.url);
      return this.userService.getUsers();
    } else { // detay ve edit sayfaları id göre veri çektiği için burayı kullanıyor
      console.log('state2', state.url);
      return this.userService.getUserDetail(route.params.id);
    }
    
  }


  // Angular Resolver
  // Angular Template Form
  // Angular Reactive Form 
  // Angular Service 
  // Angular Model --type=model 
  


}
