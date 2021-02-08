import { Component, Input, OnInit } from '@angular/core';
import { DynamicMenuConfig } from './dynamic-menu-config';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {

  // veri kaynağı
  menuList: DynamicMenuConfig[] = [
    {
      name:'Detail',
      icon:'info',
      path:'detail',
      order:1
    },
    {
      name:'Edit',
      icon:'create',
      path:'edit',
      order:2
    },
    {
      name:'Delete',
      icon:'delete',
      path:'delete',
      order:3
    }
  ];

  @Input() baseUrl;
  @Input() recordId;
  @Input() additionalMenus; // ek bu sayfa tanımlanmamış başka sayfalardan buraya gönderilecek menuler

  constructor() { }

  ngOnInit(): void {

    for (const menuItem of this.additionalMenus) {
      this.menuList.push(menuItem);
    }

    // this.menuList = [... this.menuList.sort(x=> x.order)];

    // console.log('menus', this.menuList);

  }

}
