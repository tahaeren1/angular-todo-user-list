import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';


@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  // @Output() EditClicked = new EventEmitter<any>();
  // @Output() DetailClicked = new EventEmitter<any>();
  // @Output() DeleteClicked = new EventEmitter<any>();
  @Input() recordId;
  @Input() baseRoute;


  ngOnInit(): void {
  }

  Edit(id:any) {
    const url = `/${this.baseRoute}/edit/${id}`
    this.router.navigateByUrl(url);
  }

  Delete(id:any) {
    this.openDialog(id);
  }

  Detail(id:any) {
    const url = `/${this.baseRoute}/detail/${id}`
    this.router.navigateByUrl(url);
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);

    // dialog içerisinde event haya hayıra bastığımızda result yakaladık ve ona göre işlem yaptırdık
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if(result) {
        const url = `/${this.baseRoute}/delete/${id}`
        this.router.navigateByUrl(url);
      }     

    });
  }

}
