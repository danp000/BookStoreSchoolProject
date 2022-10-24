import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../auth.component.css', './login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor( public pagServ: PagesService ) { }

  ngOnInit(): void {
  }

}
