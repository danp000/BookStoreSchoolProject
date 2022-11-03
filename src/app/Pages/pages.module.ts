import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../Shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AccountSettingsComponent } from './settings/account-settings.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { ComponentsModule } from '../Components/components.module';
import { ReviewWritingComponent } from './review-writing/review-writing.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AccountSettingsComponent,
    AccountManageComponent,
    AddBookComponent,
    DetallesLibroComponent,
    ReviewWritingComponent,
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    AccountSettingsComponent
  ],  
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
