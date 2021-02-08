import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create-page',
  templateUrl: './todo-create-page.component.html',
  styleUrls: ['./todo-create-page.component.css']
})
export class TodoCreatePageComponent implements OnInit {

  todoForm: FormGroup;
  todo: Todo = {userId:101, id:101, title:'', completed:false};

  constructor(private formBuilder: FormBuilder, private todoService: TodoService, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.createForm();
  }


  createForm() {

    this.todoForm = this.formBuilder.group({
      // userId:[this.todo.userId],
      // id:[this.todo.id],
      title:[this.todo.title, Validators.required],
      completed:[this.todo.completed,Validators.required]
    })
  }


  Save() {
    if(this.todoForm.valid) {
      this.todo = {... this.todoForm.value}

      this.todoService.createTodo(this.todo)
      .subscribe(response => {

        console.log('response', response);
        this.openDialog(true,'Todo Create işlemi Başarılı');

      }, err => {
        console.log('err', err);
        this.openDialog(false,'Todo Create işlemi başarısız oldu!');
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
