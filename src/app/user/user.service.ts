import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

// @Injectable directive ile tanımlanmış yapılar service görevi görmektedir


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClient) { }


  getUsers() {

    return this.httpClientService.get<Array<User>>('https://jsonplaceholder.typicode.com/users').toPromise();

  }

  // get veri çekme işlemlerinde kullanılır
  // fecth yerine angular httpClient service kullandık
  getUserDetail(id:number) {
    return this.httpClientService.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise();
  }

  // post kayıt işlemlerinde kullanılır
  createUser(user:User) {
    return this.httpClientService.post('https://jsonplaceholder.typicode.com/users', user).toPromise();
  }

   // put kayıt güncellleme işlemlerinde kullanılır
   updateUser(id:number, user:User) {
    return this.httpClientService.put(`https://jsonplaceholder.typicode.com/users/${id}`, user).toPromise();
  }


  deleteUser(id:number) {
    return this.httpClientService.delete(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise();
  }

}
