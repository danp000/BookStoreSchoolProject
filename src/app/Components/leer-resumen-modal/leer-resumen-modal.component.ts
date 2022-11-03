import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-leer-resumen-modal',
  templateUrl: './leer-resumen-modal.component.html',
  styleUrls: ['./leer-resumen-modal.component.css']
})
export class LeerResumenModalComponent implements OnInit {

  constructor( public mdSv: ModalService ) { }

  ngOnInit(): void {
  }

}
