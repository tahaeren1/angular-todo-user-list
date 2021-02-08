import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicMenuConfig } from 'src/app/components/dynamic-menu/dynamic-menu-config';
import { DynamicMenuComponent } from 'src/app/components/dynamic-menu/dynamic-menu.component';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit, AfterViewInit {

  todoList:Array<Todo> = [];
  displayedColumns= [];
  dataSource = new MatTableDataSource<Todo>(); // tabloya gelecek veri kaynağı 
  additionalMenus: DynamicMenuConfig[];

  // bir componentin içine başka bir component var ise bunlara viewchild ile erişiyoruz.
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  
  
  // sayfa açıldığında sayfadaki componentler yüklendiğinde bir kere çalışan event
  // child componentler ngAfterView de yüklenir. 
  // ngOninti de viewchild child componentler undefined tanımsız. çünkü daha table componenti yüklenemedi.
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // table sayfalamasını ayarlıyoruz.
  }

  ngOnInit(): void {
    this.todoList = this.activatedRoute.snapshot.data['todoData'];
    this.dataSource.data = this.todoList;
    this.displayedColumns = ['action','title', 'completed']; // hangi sütunlar var ise Todo propertylerine göre burayı ayarlıyoruz.

    const config: DynamicMenuConfig = { name:'assign', icon:'home', path:'assign', order:5 };
    const config2: DynamicMenuConfig = { name:'assign1', icon:'star', path:'assign2', order:4 };

    this.additionalMenus = [config,config2];
  }


  // sayfamızda arama işlemi yapar
  filter(searchText:string) {

    if(searchText.length >=3) {
      this.dataSource.filter = searchText.trim().toLocaleLowerCase();
    } else {
      this.dataSource.filter = '';

    }

  }


}
