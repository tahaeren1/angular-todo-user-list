import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  // private httpClientService: HttpClient 
  // HttpClientService ise HttpClientModule üzerinde tanımlanmış bir servis olup, veri çekme, veri gönderme işlemlerinde componentlerin kullandığı bir servistir.
  // constuctor içine sadece servis özelliği olan tipler tanımlanabilir.
  // constrcutor içine component gönderemeyiz.
  // constuctor içerisine bu componentin ihtiyacı olan değerleri göndeme enjecte etme işlemi yazılımda Dependency Injection diyoruz. Bağımlılıkların Tanımlanması
  // private keyword bu service sadece Typescript dosyasından erişebilirz demek
  // public bu dosyanın htmldinden de erişebilirsiniz

  // constructor(private httpClientService: HttpClient) { }

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}

  users:Array<User> = [];


  ngOnInit(): void {
    // this.loadUser(); // component yüklenirken apiden verileri çekecektir

    console.log('data', this.activatedRoute.snapshot.data.userData);

    this.users = [... this.activatedRoute.snapshot.data.userData];
  }

  loadUser() {

    // angularda bi component içerisinde httpClient service kullanarak servis üzerinden veri çekme işlemlerini yapmamız doğru değil
    // bu sebep ile angular service mantığı ortaya çıkmıştır. bu tarz işlemler servis dosyalarında tanımlanır.
    // this.httpClientService
    // .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
    // .toPromise()
    // .then(response => {
    //   console.log('data', response);

    //   // rest operator ile gelen response user listesi dolduruldu;
    //   this.users = [... response];

    // }).catch(err => {
    //   console.log('err', err);
    // });

    // servis üzerinden veri çağırma işlemi
    this.userService.getUsers().then(response => {
      this.users = [... response];

      
    }).catch(err => {
      console.log('err',err);
    });

    

  }

}
