import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { PermissionGuard } from './user/permission.guard';
import { UserCreatePageComponent } from './user/user-create-page/user-create-page.component';
import { UserDeletePageComponent } from './user/user-delete-page/user-delete-page.component';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { UserEditPageComponent } from './user/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { UserResolver } from './user/user.resolver';



const routes: Routes = [
  {
    path:'user-create',
    component:UserCreatePageComponent,
    canActivate:[PermissionGuard],
    data:{
      permission:'user-create'
    }
  },
  {
    path:'user-list',
    component:UserListPageComponent,
    resolve:{
      userData: UserResolver
    },
    canActivate:[PermissionGuard], 
    data:{
      permission:'user-list'
    }
  },
  {
    path:'user/delete/:id',
    component: UserDeletePageComponent,
    resolve:{
      userData: UserResolver
    },
    canActivate:[PermissionGuard],
    data: {
      permission:'user-delete'
    }
  },
  {
    path:'user/detail/:id',
    component: UserDetailPageComponent,
    resolve:{
      userData: UserResolver
    },
    canActivate:[PermissionGuard],
    data:{
      permission:'user-detail'
    }
  },
  {
    path:'user/edit/:id',
    component: UserEditPageComponent,
    resolve:{
      userData: UserResolver
    },
    canActivate:[PermissionGuard],
    data:{
      permission:'user-edit' 
    }
  }, 
  {
    path:'unauthorized',
    component:UnAuthorizedComponent
  },
  {
    path:'todo',
    loadChildren: () => import('./todo/todo-page.module').then(m=> m.TodoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[UserResolver]
})
export class AppRoutingModule { }



