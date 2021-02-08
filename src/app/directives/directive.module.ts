import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighLightDirective } from './high-light.directive';
import { PermissionDirective } from './permission.directive';


// directiveler componentlere benzer ve module içerisine declarationsa yazılırlar.
// componentler genelde sayfada kullanacağımız yeni elemenleri geliştirdiğimiz elementleri temsil ederken
// directive ise bu elementlere özellelik kazandırmak istediğimizde uyguladığımız bir yöntemdir.


@NgModule({
  declarations: [HighLightDirective, PermissionDirective],
  imports: [
    CommonModule
  ],
  exports:[HighLightDirective, PermissionDirective]
})
export class DirectiveModule { }
