import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {  
    path: 'inicio',
    loadChildren: () => import('./Pages/pages.module').then( m => m.PagesModule),
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ), ],
            
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
