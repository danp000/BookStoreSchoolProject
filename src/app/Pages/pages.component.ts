import { Component, OnInit } from '@angular/core';
import { ModalService } from '../Services/modal.service';
import { PagesService } from '../Services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor( public pgSv: PagesService,
                public mdSv: ModalService ) {}

  ngOnInit(): void {
  }

}
