import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { userPermissions } from '../user/user-permission';

@Directive({
  selector: '[permission]'
})
export class PermissionDirective implements OnInit {



  @Input() permissionName:string = "";

  constructor(private el:ElementRef) { }


  ngOnInit(): void {


    console.log('p_name',this.permissionName);
    console.log('userPermissions', userPermissions);


    const permissionExist = userPermissions.find(x=> x === this.permissionName);
    console.log('permissionExist', permissionExist);

    // eğer bu permission yok ise bu elementi gizle
    if( permissionExist == null) {
       // [hidden] attribute karşılık gelir
      // elementi gizler
      // this.el.nativeElement.style.display = "none";
      // bu elementi ortadan kaldırır elemente ulaşılamaz daha güvenli
      // *ngIf e karşılık gelir
      // DOMdan yetkimiz yok ise temizler
      this.el.nativeElement.remove();
    }
 
  }

}
