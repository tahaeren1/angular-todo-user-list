import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-delete-page',
  templateUrl: './todo-delete-page.component.html',
  styleUrls: ['./todo-delete-page.component.css']
})
export class TodoDeletePageComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // silinecek kayda dair bilgileri çekip silme işlemini gerçekleştirdik
    this.todoService.deleteTodo(this.activatedRoute.snapshot.params.id)
    .subscribe(res => {
      // silindi kayıt
      // eğer silme başarılı ise başarılı dialog mesajı gösterdik
      this.openDialog(true);
    }, err => {
      // hata dialog mesajı gösterdik
      this.openDialog(false);
    })

  }


  openDialog(IsSucceded) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        IsSucceded: IsSucceded
      }
    });

    // dialog component kapadıktan sonra ise todo-list sayfasına yönlendirdik
    dialogRef.afterClosed().subscribe(result => {
        this.router.navigateByUrl('/todo/list'); 
    });
  }

}
