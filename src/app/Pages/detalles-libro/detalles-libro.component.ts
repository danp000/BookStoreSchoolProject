import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book.model';
import { PagesService } from 'src/app/Services/pages.service';
import { Cobertura } from '../../Interfaces/cobertura.interface';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent implements OnInit {

  public book: Book = {
    titulo: 'Veinte mil leguas de viaje submarino',
    escritor: 'Jules Verne',
    editor: 'Alianza Editorial',
    lanzamiento: 'Marzo 1970',
    cobertura: [
      { tipo: 'Tapa dura',estado: 'Como nuevo',total: 4,precio: 12.2, },
      { tipo: 'Tapa blanda',estado: 'Aceptable',total: 4,precio: 5.7, },
      { tipo: 'Audio',estado: 'Nuevo',total: 8,precio: 4.2, },
      { tipo: 'Libro bolsillo',estado: 'Nuevo',total: 5,precio: 3.2, },
    ],
    precios: ['9.43', '4.21', '3.90', '2.72'],
    isbn: '9788435055680',
    idioma: 'Español',
    total: [5, 3, 4, 8],
    paginas: 382,
    img: './../../../assets/books/cartas_desde_la_isla.jpg',
  };
  public listadoStates: string[] = ['Aceptable', 'Muy bueno', 'Como nuevo', 'Nuevo']; 
  public estadoActual: string = this.book.cobertura[0].estado;
  public coverToSelect: Cobertura = this.book.cobertura[0];
  public stateToSelect!: Cobertura;
  selectedFormat: string = this.book.cobertura[0].tipo;
  priceFormat: string = this.book.cobertura[0].precio.toString();
  priceNumber: number = this.book.cobertura[0].precio;
  estadoSelectAuto: string = '';
  coverSelectAuto: string = '';
  autoSelectState: boolean = false;
  autoSelectCover: boolean = false;
  iteratedQty: number[] = [];
  qtySelected: number = 1;

  @ViewChild('qty') quantity!: ElementRef;

  public readOn: boolean = false;
  public ratingArray: number[] = [];
  private totalStars: number = 5;
  private ratingFullStar: number[] = [];
  private ratingHalfStar: number[] = [];
  private ratingEmptyStar: number[] = [];
  public starPaths: string[] = [];
  public altOfStar: string[] = [];
  
  public scrollLeftPos: number = 0;
  public scrollLeftEnd: boolean = false;

  reviewVoted: boolean = false;
  reviewReported: boolean = false;
  libro: Array<any> = [
    { title: 'Género/s', content: 'Novela, ciencia ficción, aventuras' },
    { title: 'Tema/s', content: 'El mar' },
    { title: 'Titulo original', content: 'Vingt mille lieues sous les mers' },
    { title: 'País origen', content: 'Francia' },
    { title: 'Ambientada en', content: 'Nueva York, India, Noruega y Francia' },
    { title: 'Primera publicación', content: '20 de marzo de 1869' },
  ];
  pubDetails: Array<any> = [
    { title: 'Formato', content: 'Libro bolsillo' },
    { title: 'Idioma', content: this.book.idioma },
    { title: 'ISBN', content: this.book.isbn },
    { title: 'Fecha publicación', content: this.book.lanzamiento },
    { title: 'Casa editorial', content: this.book.editor },
    { title: 'Numero páginas', content: this.book.paginas },
  ]
  constructor( public pagServ: PagesService ) {
    // this.priceFormat += parseFloat(this.priceFormat) * this.qtySelected;
    // this.calculatePrice(+this.priceFormat, this.qtySelected);
  }
  ngOnInit(): void {
    this.iterateTotalCovers();
    for (let index = 0; index < this.totalStars; index++) {
      this.ratingArray.push(index);
    }
    this.iterateStars();
    this.scrollOn();
  }

  selectFormat(  est?: string, ev?: any, atr?: Cobertura ) {
    if ( atr ) {
      this.autoSelectCover = false;
      this.coverSelectAuto = '';
      this.coverToSelect = atr;
      this.iterateTotalCovers();
      this.estadoActual = atr.estado;
      this.selectState(this.estadoActual);

      if ( !ev.path[1].childNodes[0].data ) {
        this.selectedFormat = ev.path[0].childNodes[0].data;
        this.priceFormat = ev.path[0].childNodes[1].innerHTML;
        this.priceFormat = this.priceFormat.slice(0, -1);
        this.priceNumber = +this.priceFormat;
        return;
      }
      this.priceFormat = ev.path[0].innerHTML;
      this.priceFormat = this.priceFormat.slice(0, -1);
      this.priceNumber = +this.priceFormat;
      this.selectedFormat = ev.path[1].childNodes[0].data;
      return;
    }
    this.autoSelectCover = true;
    let i = 0;
    this.book.cobertura.forEach(co => {
      i++;
      if (est === co.estado) {
        this.coverToSelect = co;
        this.coverSelectAuto = co.estado;
        this.selectedFormat = co.tipo;
        this.priceNumber = co.precio;
        this.priceFormat = co.precio.toString();
      }
    });
    this.iterateTotalCovers();
  }
  selectState( est?: string, ev?: any, atr?: Cobertura) {
    if ( atr ) {
      this.autoSelectState = false;
      this.estadoSelectAuto = '';
      this.stateToSelect = atr;
      this.selectFormat(est);

      if ( !ev.path[1].childNodes[0].data && ev.path[0] ) {
        this.estadoActual = ev.path[0].childNodes[0].data;
        return;
      } else if ( ev.path[1].childNodes[0].data) {
        this.estadoActual = ev.path[1].childNodes[0].data;
        return;
      } 
    }
    this.autoSelectState = true;
    let i = 0;
    this.listadoStates.forEach(es => {
      i++;
      if (est === es) {
        this.estadoSelectAuto = es;
      }
    });
  }
  disableStateBtn( es?: string ) {
    const estadosDisponibles = [''];
    this.book.cobertura.forEach(co => {
      this.listadoStates.forEach(es => {
        if (co.estado === es) {
          if (!estadosDisponibles.includes(es)) {
            estadosDisponibles.push(es);
          }
        } 
      });
    });
    let estadoDisp = '';
    estadosDisponibles.forEach(dp => { 
      if (es === dp) {
        estadoDisp = dp;
      };
    });
    return es === estadoDisp;
  }
  showTotalStockState(est: string) {
    var totalDispState = 0;
    this.book.cobertura.forEach(co => {
      if (est === co.estado) {
        totalDispState += co.total;
      }
    });
    return totalDispState;
  }
  iterateTotalCovers() {
    this.iteratedQty = [];
    for (let i = 1; i <= this.coverToSelect.total; i++) {
      this.iteratedQty.push(i);
    }
  }
  calculatePrice() {
    this.qtySelected = this.quantity.nativeElement.value;
    const price = this.priceNumber * this.qtySelected;
    this.priceFormat = price.toString();
    console.log(this.priceFormat);
  }

  iterateStars() {
    for (let i = 0; i < 4; i++) {
      this.ratingFullStar.push(i);
    }
    for (let i = 0; i < 1; i++) {
      this.ratingHalfStar.push(i);
    }
    for (let i = 0; i < 1; i++) {
      this.ratingEmptyStar.push(i);
    }
    this.imageStatus();
  }
  swichRead() {
    this.readOn = !this.readOn;
  }
  textRead() {
    return !this.readOn ? 'Leer todo': 'Colapsar'; 
  }
  scrollDownReviews() {
    var target = document.getElementById('reviews-section')!;
    target.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  scrollOn() {
    var offsetWidth = document.getElementById('drag-container')!.offsetWidth;
    var scrollWidth = document.getElementById('drag-container')!.scrollWidth;
    var contentWidth = scrollWidth - offsetWidth + 220;
    const scrollCont = document.getElementById('drag-container')!;
    scrollCont.addEventListener("scroll", () => {
      this.scrollLeftPos = scrollCont.scrollLeft;
      if (contentWidth <= scrollCont.scrollLeft) {
         this.scrollLeftEnd = true;
        } else { this.scrollLeftEnd = false; }
    });
  }
  scrollLeft() {
    let width = window.innerWidth;
    console.log(width);
    if ((width > 1867 )) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -1490, behavior: 'smooth'});
    } else if (width <= 1867 && width > 1567) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -1390, behavior: 'smooth'});
    } else if (width <= 1567 && width > 1367) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -1290, behavior: 'smooth'});
    } else if (width <= 1367 && width > 1267) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -1105, behavior: 'smooth'});
    } else if (width <= 1267 && width > 1187) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -1005, behavior: 'smooth'});
    } else if (width <= 1187 && width > 957) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -905, behavior: 'smooth'});
    } else if (width <= 957 && width > 930) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -825, behavior: 'smooth'});
    } else if (width <= 930 && width > 800) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -705, behavior: 'smooth'});
    } else if (width <= 800) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: -605, behavior: 'smooth'});
    }
    // var offsetWidth = document.getElementById('drag-container')!.offsetWidth;
    // var scrollWidth = document.getElementById('drag-container')!.scrollWidth;
    // var scrollLeft = document.getElementById('drag-container')!.scrollLeft;
    // var contentWidth = scrollWidth - offsetWidth;
    // console.log(scrollLeft);
    // if (contentWidth <= scrollLeft)
    //   { this.scrollLeftEnd = true;
    //   } else { this.scrollLeftEnd = false; }
    // const scrollCont = document.getElementById('drag-container')!;
    // this.scrollRightPos = scrollLeft;
    // scrollCont.addEventListener("scroll", () => {
    //   this.scrollLeftPos = scrollCont.scrollLeft;
      // if ( this.scrollRightPos > scrollCont.scrollLeft ) {
      //   this.scrollLeftEnd = false;
      // } else if ( this.scrollRightPos === scrollCont.scrollLeft ){
      //   this.scrollLeftEnd = true;
      // }
    // });
  }
  scrollRight() {
    let width = window.innerWidth;
    console.log(width);
    if ((width > 1867 )) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 1490, behavior: 'smooth'});
    } else if (width <= 1867 && width > 1567) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 1390, behavior: 'smooth'});
    } else if (width <= 1567 && width > 1367) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 1290, behavior: 'smooth'});
    } else if (width <= 1367 && width > 1267) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 1105, behavior: 'smooth'});
    } else if (width <= 1267 && width > 1187) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 1005, behavior: 'smooth'});
    } else if (width <= 1187 && width > 957) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 905, behavior: 'smooth'});
    } else if (width <= 957 && width > 930) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 825, behavior: 'smooth'});
    } else if (width <= 930 && width > 800) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 705, behavior: 'smooth'});
    } else if (width <= 800) {
      document.getElementById('drag-container')!.scrollBy({ top: -20, left: 605, behavior: 'smooth'});
    }
  }
  voteReview() {
    this.reviewVoted = !this.reviewVoted;
  }
  reportReview() {
    this.reviewReported = !this.reviewReported;
  }
  imageStatus() {
    this.ratingFullStar.forEach(() => {
      this.starPaths.push('./../../../assets/diversos/rating-star-ed1.png');
      this.altOfStar.push('FullStar');
    });
    this.ratingHalfStar.forEach(() => {
      this.starPaths.push('./../../../assets/diversos/half-star.png');
      this.altOfStar.push('HalfStar');
    });
    this.ratingEmptyStar.forEach(() => {
      this.starPaths.push('./../../../assets/diversos/star-edit-outline-rating');
      this.altOfStar.push('EmptyStar');
    });
  }
}
