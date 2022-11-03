import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../Services/pages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ '../auth.component.css' ]
})
export class RegisterComponent implements OnInit {

  constructor( public pagServ: PagesService ) { }

  ngOnInit(): void {
  }

}
