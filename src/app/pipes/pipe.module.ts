import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletePipe } from './complete.pipe';


// Pipelarda Component gibi declartionsda tanımlanır
// Görevi ise htmlde bir alanı istedğimiz formatta gösterebilmektir.

@NgModule({
  declarations: [CompletePipe],
  imports: [
    CommonModule
  ],
  exports:[CompletePipe]
})
export class PipeModule { }
