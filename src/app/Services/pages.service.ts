import { EventEmitter, Injectable, Output } from '@angular/core';
import { __metadata } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  collapse: boolean = false;
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {}

  toggleList() {
    this.collapse = !this.collapse;
    if (this.collapse) {
      this.open.emit(false);
    } else {
      this.close.emit(true);
    }
  }
  getMockDataClass() {
    return __metadata;
  }
}
