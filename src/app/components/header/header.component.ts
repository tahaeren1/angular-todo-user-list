import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() drawerState: boolean = false;
  @Output() drawerStateChanged = new EventEmitter<any>();

  ngOnInit(): void {
  }

  changeState(drawerState) {
    this.drawerState = !drawerState;
    this.drawerStateChanged.emit(this.drawerState);
  }

}
