import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  user:User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // ActivatedRoute servisi @angular/router kütüphanesine tanımlı ve yönlendiğimiz sayfaya ait dinamik link bişlgilerini çektiğimiz servistir.

    // let id =  this.activatedRoute.snapshot.params.id;

    // console.log('this.activatedRoute.snapshot.params.id', this.activatedRoute.snapshot.params);

    this.user = { ... this.activatedRoute.snapshot.data.userData};

    // this.loadUser(id);

  }

  // loadUser(id:number) {
  //   this.userService.getUserDetail(id).then(response => {
      
  //     this.user = { ... response};

  //   }).catch(err => {
  //     console.log('err',err);
  //   });
  // }

}
