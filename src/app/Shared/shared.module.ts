import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TheHeaderComponent } from './header/the-header.component';
import { TheFooterComponent } from './the-footer/the-footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TheHeaderComponent,
    TheFooterComponent
  ],
  exports: [
    SidebarComponent,
    TheHeaderComponent,
    TheFooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class SharedModule { }
