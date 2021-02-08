import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve  <any> {

  constructor(private todoService: TodoService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> | Observable<Todo[]> {

    if(state.url === '/todo/list')
      return this.todoService.getTodos();
    else
      return this.todoService.getTodoDetail(route.params.id);

  }
}
