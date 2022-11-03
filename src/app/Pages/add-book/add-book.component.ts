import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../Services/pages.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { patronNombre } from '../../Shared/validators/validaciones';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./../pages.component.css', './../account-manage/account-manage.component.css', './add-book.component.css']
})
export class AddBookComponent implements OnInit {

  selectOptions1: string[] = ['Tapa blanda', 'Tapa dura', 'Libro de bolsillo', 'Cómic'];
  selectOptions2: string[] = ['eBook', 'Audio Book'];
  hideIcn: boolean = false;
  public archivoImg!: File;
  public viewImg!: string | ArrayBuffer;

  public libroForm: FormGroup = this.fb.group({
    titulo: [ '', [ Validators.required, Validators.minLength(2) ]],
    autor: [ '', [ Validators.required, Validators.pattern(patronNombre) ]],
    editorial: [ '', [ Validators.required, Validators.minLength(4) ]],
    idioma: [ '', [ Validators.required, Validators.minLength(4) ]],
    publicado: [ '', [ Validators.required ]],
    cobertura: [ null, [ Validators.required ]],
    isbn: [ '', [ Validators.required, Validators.minLength(13) ]],
    resumen: [ '', [ Validators.required, Validators.minLength(55) ]],
    imagen: [ null, [ Validators.required ]],
  });

  constructor( public pgSv: PagesService,
                private fb: FormBuilder ) { }

  ngOnInit(): void {
  }
  swichIcon() {
    this.hideIcn = false;
  }
  showPreview(event: any) {
    this.archivoImg = event.target.files[0];

    if ( !this.archivoImg ) {
      this.viewImg = '';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.archivoImg);
    reader.onloadend = () => {
      this.viewImg = reader.result!;
    };
  }

  submitForm() {
    console.log(this.libroForm.value);
  }

}
