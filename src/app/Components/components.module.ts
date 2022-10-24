import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerResumenModalComponent } from './leer-resumen-modal/leer-resumen-modal.component';



@NgModule({
  declarations: [
    LeerResumenModalComponent
  ],
  exports: [
    LeerResumenModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
