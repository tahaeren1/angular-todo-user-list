import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete-page',
  templateUrl: './user-delete-page.component.html',
  styleUrls: ['./user-delete-page.component.css']
})
export class UserDeletePageComponent implements OnInit {

  user:User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router:Router) { }

  ngOnInit(): void {

    //sayfaya gelen istek idsi bulunur
    const id = this.activatedRoute.snapshot.params.id;
    // resolverdan dönen data bulunur
    this.user = this.activatedRoute.snapshot.data.userData;

  }


  Delete(id:number) {
    var result = confirm('Kaydı silmek istediğinize emin misiniz ?')

    if(result) {

      this.userService.deleteUser(id)
      .then(response => {
        alert('kayıt silindi');
        // angularda ts dosyasındaki yönlendirmeleri router service ile yapıyoruz
        this.router.navigateByUrl('user-list');

      }).catch(err => {
        console.log('err', err);
      })

    }
  }

}
