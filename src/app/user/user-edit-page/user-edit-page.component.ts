import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilderService: FormBuilder) { }


  // edit işleminde formu bind etmek için async await yapısını kullanarak asenkron problemini çözebiliriz
  // 1. yöntem

  // 2. yöntem async await kullanmayız bu durumda veri çekildikten sonra form create ederiz


  // 3.yöntem ise resolver yazmak yani sayfa açılmadan sayfanın itiyacı olan dataların ayrı bir service üzerinden çekilip sayfaya bağlanmasını sağlayan bir yöntemdir.



  // 1. yöntem için yazıldı
  //  async ngOnInit() {

  //     const id = this.activatedRoute.snapshot.params.id;
  //     await this.loadUserDetail(id);
  //     this.createUserForm();

  //   }


  // 2. yöntem için yazıldı
  // ngOnInit() {

  //   const id = this.activatedRoute.snapshot.params.id;
  //   this.loadUserDetailPromise(id);
  // }

   ngOnInit() {

    // resolverdaki verileri this.activatedRoute.snapshot.data yakalarız.

    this.user = { ... this.activatedRoute.snapshot.data.userData };
    console.log('user', this.user);
    this.createUserForm();
  }


  createUserForm() {

    console.log('user', this.user);

    // form builder service görevi bir form group nesnesi oluşturmaktır
    this.userForm = this.formBuilderService.group({
      id: [this.user?.id || ''],
      name: [this.user?.name || '', Validators.required],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      username: [this.user?.username || ''],
      phone: [this.user?.phone || ''],
      website: [this.user?.website || '']
    });

    console.log('createUserForm');

  }

  async loadUserDetail(id: number) {
    this.user = await this.userService.getUserDetail(id);
  }

  loadUserDetailPromise(id: number) {
    this.userService.getUserDetail(id).then(response => {
      this.user = { ...response };

      // veri çekildikten sonra create methodunu çağırarak işlem yapabiriliz

      this.createUserForm();

    })
  }



  save() {

    // validasyonlara uyulmuş ise
    if (this.userForm.valid) {

      const id = this.userForm.get('id').value; // ilgili form üzerinden id alanın değerini update için okuduk
      this.user = { ...this.userForm.value }; // userForm.value ile userFormdan girilen değerleri user nesnesine eşlemiş olduk

      this.userService.updateUser(id, this.user).then(response => {
        alert('Güncelleme işlemi başarılı');
      }).catch(err => {
        console.log('err', err);
      });

    }

  }

}
