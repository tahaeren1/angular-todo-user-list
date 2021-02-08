import { Component, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


export interface DialogData {
  SuccessMessage?:string;
  ErrorMessage?:string;
  IsSucceded?:boolean;
}



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {



  // MatDialogRef servisi ile htmldeki dialog pencersine erişilir.


  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.data.SuccessMessage = 'İşlem Başarılı';
    this.data.ErrorMessage = 'Bir hata meydana geldi!';
    
  }

  close() {
    // modalı kapar
    this.dialogRef.close();
  }

}
