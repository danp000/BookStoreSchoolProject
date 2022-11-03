import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../Services/pages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggleBar: boolean = true;
  idLista!: string;

  constructor( public pagServ: PagesService ) {}
  ngOnInit(): void {}

  swichBar() {
    this.pagServ.toggleList();
    this.toggleBar = !this.toggleBar;
  }
  changeIcon() {
    return this.toggleBar ? 'menu_open' : 'menu icon';
  }
  abrirLista( ev?: any ) {
    this.idLista = ev.path[0].id;
  }
  cerrarLista( ev?: any ) {
    if ( (ev.fromElement.id === 'mini-1' &&  ev.relatedTarget?.id !== 'mini-1-1') ||  (ev.fromElement.id === 'mini-2' 
          && ev.relatedTarget?.id !== 'mini-2-2') ) {
      this.idLista = '';
    }
    if (( ev.fromElement.id === 'mini-1-1' ) || ( ev.fromElement.id === 'mini-2-2' )) {
      this.idLista = '';
    }
  }

}
