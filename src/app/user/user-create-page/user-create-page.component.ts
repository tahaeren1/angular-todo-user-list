import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.css']
})
export class UserCreatePageComponent implements OnInit {

  user:User = { id:0 ,name:'', email:'', username:'', phone:'', website:''}
  userLength: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

   this.userService.getUsers().then(response => {
     this.userLength = response.length;
     this.user.id = this.userLength++; // id alanını en son kayda göre dinamik arttırdık
   });

  }


  // forma ait değişen bilgiler userService gönderdik
  save() {

    this.userService.createUser(this.user)
    .then(response => {
      console.log('user-create-res', response);
      alert('Kullanıcı sisteme başarılı bir şekilde eklendi');
    }).catch(err => {
      console.log('err', err);
    });

  }




}
