import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalCerrado: boolean = false;
  modalAbierto: boolean = false;

  constructor() { }

  cerrarModal() {
    this.modalAbierto = false;
    this.modalCerrado = true;
  }
  abrirModal() {
    this.modalAbierto = true;
    this.modalCerrado = false;
  }
}
