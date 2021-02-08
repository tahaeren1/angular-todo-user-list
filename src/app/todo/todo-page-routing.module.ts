import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreatePageComponent } from './todo-create-page/todo-create-page.component';
import { TodoDeletePageComponent } from './todo-delete-page/todo-delete-page.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';
import { TodoEditPageComponent } from './todo-edit-page/todo-edit-page.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';
import { TodoflexComponent } from './todoflex/todoflex.component';

const routes: Routes = [
  {
    component:TodoCreatePageComponent,
    path:'create'
  },
  {
    component:TodoEditPageComponent,
    path:'edit/:id',
    resolve:{
      todoData: TodoResolver
    }
  },
  {
    component:TodoListPageComponent,
    path:'list',
    resolve:{
      todoData: TodoResolver
    }
  },
  {
    component:TodoDeletePageComponent,
    path:'delete/:id',
    resolve:{
      todoData: TodoResolver
    }
  },
  {
    component:TodoDetailPageComponent,
    path:'detail/:id',
    resolve:{
      todoData: TodoResolver
    }
  },
  {
    component:TodoflexComponent,
    path:'flex'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[TodoResolver, TodoService]
})
export class TodoPageRoutingModule { }
