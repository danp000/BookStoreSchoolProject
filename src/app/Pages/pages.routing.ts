import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from '../Auth/register/register.component';
import { LoginComponent } from '../Auth/login/login.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { ReviewWritingComponent } from './review-writing/review-writing.component';
// import { AccountSettingsComponent } from './settings/account-settings.component';
// import { PerfilComponent } from './perfil/perfil.component';

// Matenimientos
// import { UsuariosComponent } from './manteniemiento/usuarios/usuarios.component';


const routes: Routes = [

  { 
   path: '',
   component: PagesComponent,
  //  canActivate: [ AuthGuard ],
   children: [ 
    { path: '', component: HomeComponent, data: { title: 'Página de inicio' } },
    { path: 'detalles', component: DetallesLibroComponent, data: { title: 'Página de inicio' } },
    { path: 'review', component: ReviewWritingComponent, data: { title: 'Reseña libro' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Cuenta Nueva' } },
    { path: 'login', component: LoginComponent, data: { title: 'Acceso Cuenta' } },
    { path: 'ajustes', component: AccountManageComponent, data: {title: 'Administar Cuenta' } },
    { path: 'agregar', component: AddBookComponent, data: {title: 'Añadir Libro' } },
    // { path: 'perfil', component: PerfilComponent, data: {title: 'Mi Perfil' } },

    // Mantenimientos
    // { path: 'usuarios', component: UsuariosComponent, data: {title: 'Usuarios' } },
  
] },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ] 
})
export class PagesRoutingModule {}
