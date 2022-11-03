import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../../Services/pages.service';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./../pages.component.css', './account-manage.component.css']
})
export class AccountManageComponent implements OnInit {

  public perfilForm!: FormGroup;
  // public usuario!: Usuario;

  constructor( private fb: FormBuilder,
                public pgSv: PagesService ) {}
  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [ 'this.usuario.nombre', [ Validators.minLength(3) ] ],
      email: [ 'this.usuario.email', [] ],
      password: [ 'this.usuario.password', [ Validators.minLength(4) ] ],
      role: [ 'this.usuario.role', [ Validators.minLength(5) ] ]
    });
    // if (this.perfilForm.get('role')?.value !== 'ADMIN') {
    //   this.perfilForm.get('role')?.disable();
    // }
    // if( 'this.usuario.google' ) {
    //   this.perfilForm.get('password')?.setValue('##..***..##');
    //   this.perfilForm.get('password')?.disable();
    // }
  }
}
