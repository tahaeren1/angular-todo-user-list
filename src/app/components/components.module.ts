import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [DialogComponent, TableMenuComponent, DeleteConfirmDialogComponent, DynamicMenuComponent, FooterComponent, HeaderComponent, SideMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    OrderModule
  ],
  exports:[DialogComponent, TableMenuComponent, DynamicMenuComponent, FooterComponent, HeaderComponent, SideMenuComponent],
  entryComponents:[DialogComponent]
})
export class ComponentsModule { }

// angularda sayfa üzerinde açılan popup componentler entrycomponent özelliği gördüğünden dolayı 
// entryComponents olarak declare edilmemelilerdir.