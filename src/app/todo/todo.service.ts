import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

const todoBaseUrl = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   

  constructor(private httpClient:HttpClient) { }

  // Promise yerine reactive Programla içersinde geçen rxjs kütüphanesi kullanıcağız
  // rxjs kütüphaneside Promise benzeri veri üzerinde opertörler ile veri manipülasyonu yapmamızı sağlar
  // veriyi çekerken veri üzerinde filtreleme, birden fazla servisi birbirne bağlama, veriyi çekerken hataları yakalama, veriye bağlanıp veriyi manipüle etme vs gibi Promise de yapamadığımız işlemleri yapabiliyoruz.
  // Observable tipi ile çaılışaz

  // Subscriber ve Observable diye iki temel yaklaşım söz konusu
  // Subscriber abone demek
  // Observable ise izlenen takip edilen
  // servisten gelecek olan tiplerimiz Observable olarak tanımlandığında biz bunların içerisindeki verileri çekmek için subscribe olucayaz yani abone olup veriyi dinleyeceğiz.

  getTodos() {
   return this.httpClient.get<Todo[]>(todoBaseUrl);
  }

  getTodoDetail(id: number) {
    return this.httpClient.get<Todo[]>(`${todoBaseUrl}/${id}`);
   }

  createTodo(todo:Todo) {
    return this.httpClient.post<Todo>(todoBaseUrl, todo);
  }

  updateTodo(id:number, todo:Todo) {
    return this.httpClient.put<Todo>(`${todoBaseUrl}/${id}`, todo);
  }

  deleteTodo(id:number) {
    return this.httpClient.delete<Todo>(`${todoBaseUrl}/${id}`);
  }

}
