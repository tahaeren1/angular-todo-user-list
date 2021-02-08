import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.css']
})
export class TodoDetailPageComponent implements OnInit {

  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.todo = this.activatedRoute.snapshot.data['todoData'];

  }

}
