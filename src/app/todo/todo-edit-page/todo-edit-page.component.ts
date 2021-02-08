import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { catchError, debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.css']
})
export class TodoEditPageComponent implements OnInit, OnDestroy {

  todoForm: FormGroup;
  todo: Todo;

  // Subscription tipinde bir değer tanımlayıp her bir değişimi bu değişken üzerinden dinleriz.
  todoTitleSubscription: Subscription;
  titleLength = 0;


  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private todoService: TodoService, public dialog: MatDialog) { }


  ngOnDestroy(): void {
    // bu component sayfadan kalktığında çalışan bir kod
    // bu durumda sayfada eğer herhangi bir Subscription ile bir alanın dinlemesi mevcut ise bunları unsubscribe ile
    // aradaki bağlantıyı kesiyoruz.
    // bu önemli bir şey Subscription tipinde tanımlanmış bir değer varsa kesinlikle ngOnDestroy da unsubscribe edilmelidir.
    this.todoTitleSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.todo = this.activatedRoute.snapshot.data['todoData'];
    this.createForm();
    this.TodoTitleChange();
  }

  TodoTitleChange() {
    // form içerisindeki bir alanın değişimini takip ediyoruz
    // 
    // this.todoTitleSubscription = this.todoForm.get('title')
    // .valueChanges
    // .subscribe(res => {
    //   console.log('res', res);
    // })

    // debounceTime 2 saniyede bir değişim de tetiklen
    // tap operatörü ile suanki değişen veriyi yakaladım
    // map operatörü ile yakalanan veri üzerinde bir eylem gerçekleştiridim
    // pipe operatörü ile data üzerinde yapılacak olan eylemleri grupladım
    // subscribe ile de veriyi dinlemeye başladım

    // Reactive Programlama ismini veriyoruz
    // Operatörler var veri çekerken bazı eylemleri gerçekleştiriyorlar


    // Observable ile Promise arasında yakın bir ilişki söz konusu Observable tipi rxjs denilen kütüphane ile hayatımıza girdi.
    // api üzerinden çekilecek olan tüm verilerden sayfa üzerindeki tüm etkileşimlere kadar etkileşime geçilen her nesne gözlemci dediğimiz tipte tanımlanabiliyor. Observable
    // bu gözlemlenebilir tipleri takip etmek için onların değişimi yakalamak için observable olan bu tiplere subscribe oluyor. Yani abone oluyoruz. ve dinlemeye başlıyoruz. rxjs ile bu observable tipler subscribe edililirken araya girip veri üzerinden belli manüplasyon işlemleri yapılabiliyor. biz bunu yapmak için subscribe dan önce pipe operatörünü kullanıyoruz. ve tüm etkileşimleri bu pipe operatörü içerisinde başka operatörleri gerekli olanları çağırıyoruz.

    // Angular FormGroup üzerindeki valueChanges özelliğini kullanarak inputlardaki değişimi dinleyip bir işlem yapabiliriz.
     this.todoTitleSubscription = this.todoForm.get('title')
    .valueChanges
    .pipe( // veri çekerken müdahale edibildiğimiz pipe ise ayrı bir operatör olur, operatörlerin kapsayıcısı görevindedir. 
      debounceTime(200), // berlirli bir süre bekleme yaptıktan sonra işlem yapar yani timeOut gibi çalışır
      tap(x=> {
        this.titleLength = x.length;
      }), // veriyi yakalar burada bir fonsiyon çalıştırılabilir. loading aç kapa yapmaya uygun
      map(a=> { // veri manüplasyonu için kullanılabilir
        console.log('a', a);
        return a + '1234';
      }),
      catchError(err => of('Hata Meydana geldi')) // catchError ise veri çekerken bir hata olduğu durumu yakalamak için kullanılır.
      // of ile bir değer döndürmek için kullanırız. yukarıda string hata mesajını of ile döndürdük.
      ).subscribe(response => {
        console.log('response', response); // loading subscribe dan sonra kapatılabilir. burada artık veri hazır hale gelmiş olur.
      });
  }


 


  createForm() {

    this.todoForm = this.formBuilder.group({
      id:[this.todo.id],
      title:[this.todo.title, Validators.required],
      completed:[this.todo.completed,Validators.required]
    })
  }


  Save() {
    if(this.todoForm.valid) {
      this.todo = {... this.todoForm.value}

      this.todoService.updateTodo(this.todo.id,this.todo)
      .subscribe(response => {

        console.log('response', response);
        this.openDialog(true,'Todo başarılı bir şekilde güncellendi');

      }, err => {
        console.log('err', err);
        this.openDialog(false,'Güncelleme işlemi sırasında hata oluştu!');
      })
    }
    
  }


  openDialog(isSucceded:boolean,message:string) {

    const config = new MatDialogConfig();
    config.width = '30%';
    // config.position.top = '10';
    config.minHeight = '100px';
    // config.backdropClass = ['backdropClass'],
    config.position = {
      top:'5rem'
    }
    config.hasBackdrop = true; // modal dışında boşluğa basılınca kapansın mı
    config.disableClose = false; // esc tuşuna basınca kapanma ayarı default false true yaparak bunu engelleyebiliriz.
    config.data = {
      IsSucceded:isSucceded,
      SuccessMessage: isSucceded == true ? message : '',
      ErrorMessage: isSucceded == false ? message : ''
    };

    const dialogRef = this.dialog.open(DialogComponent, config);
  }

}
