import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageRoutingModule } from './todo-page-routing.module';
import { TodoCreatePageComponent } from './todo-create-page/todo-create-page.component';
import { TodoEditPageComponent } from './todo-edit-page/todo-edit-page.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';
import { TodoDeletePageComponent } from './todo-delete-page/todo-delete-page.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoflexComponent } from './todoflex/todoflex.component';
import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../pipes/pipe.module';
import { DirectiveModule } from '../directives/directive.module';


@NgModule({
  declarations: [TodoCreatePageComponent, TodoEditPageComponent, TodoDetailPageComponent, TodoDeletePageComponent, TodoListPageComponent, TodoflexComponent],
  imports: [
    CommonModule,
    TodoPageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentsModule,
    PipeModule,
    DirectiveModule
  ]
})
export class TodoPageModule { }

// FlexLayoutModule module kendi modulümüze import ederken projeyi durdurup tekrar derliyelim
// FlexLayoutModule flex kullanacak isek kendi modulümüze import etmeliyiz.



// Module üzerinden sayfaların yüklenmesini sağlayan bu özelliğe Lazy Loading Feature Module ismini veriyoruz.
// Eğer bu işlemi yaparsak uygulama büyüdüğünde tüm componentlerimiz sadece AppModule altında toplanmaz daha düzenli kod yazarız.
// Sayfa ilk açıldığında Tüm componentlere sayfaya AppModule üzerinden yükleneceğine sadece ilgili module path üzerinden module yüklemesi yaparız
// todo route geldiğinde TodoPageModule yüklenecek


// Kendi modulumuze MaterialModule import ederik Angular Material module erişmiş oluyoruz.


