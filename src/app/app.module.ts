import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreatePageComponent } from './user/user-create-page/user-create-page.component';
import { UserEditPageComponent } from './user/user-edit-page/user-edit-page.component';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { UserDeletePageComponent } from './user/user-delete-page/user-delete-page.component';
import { UserService } from './user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    UserCreatePageComponent,
    UserEditPageComponent,
    UserDetailPageComponent,
    UserListPageComponent,
    UserDeletePageComponent,
    UnAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ngModel kullanımının çalışabilmesi için AppModule FormsModule import etmeliyiz.

// FlexLayoutModule ile uygulama genelinde flex yapısını uygulama tanıttmış olduk


// Template Forms dışında Reactive Forms module denen bir modul daha var bunun için ReactiveFormsModule import ederiz.


// HttpClientModule module ile httpget, httppost, httpput, httpdelete işlemleri yapabiliyoruz.
// bu işlemleri yapabilmek için AppModule e HttpClientModule import edilmelidir.


// AppRoutingModule ile route dosyalarını uygulamaya tanıttık
// servisler AppModule içerisinde providers kısmında tanımlanırlar 


// AppModule MaterialModule import ederek Angular Material Componentlerine erişmiş oluyoruz.

