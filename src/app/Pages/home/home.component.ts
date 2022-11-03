import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book.model';
import { ModalService } from 'src/app/Services/modal.service';
import { PagesService } from '../../Services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../pages.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  leerMas: boolean = false;
  buscando: boolean = false;
  public desde: number = 0;
  public totalLibros: number = 0;
  public totalPages: number = 10;
  public pagesArray: number[] = [];
  libros: Book[] = [
    {
      titulo: 'Cartas desde la isla Skye',
      escritor: 'Jessica Brockmole y Santiago del Rey Farrés',
      cobertura: [ { tipo: 'Tapa dura',estado: 'Como nuevo',total: 4,precio: 5.43, }, ],
      precios: ['5.43']      
    }
  ];


  constructor( public pgSv: PagesService,
                public mdSv: ModalService ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.totalPages; i++) {
      this.pagesArray.push(i);
    }
  }

  leerResumen() {
    this.leerMas = !this.leerMas;
  }

  buscarUsuario(termino: string) {

  }
  retornaTotalEnPagina() {
    if ( !this.buscando ) {
      return (this.desde <= (this.totalLibros - 5))
              ? (this.desde + 5) : this.totalLibros
    } else {
      return this.libros.length > 0 ? this.totalLibros : null;
    }
  }


}
