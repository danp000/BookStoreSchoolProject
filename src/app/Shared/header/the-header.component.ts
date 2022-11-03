import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {

  toggleLink: boolean = false;
  logged: boolean = true;
  
  constructor() { }
  ngOnInit(): void {}

  login() {
    this.logged = true;
  }
  logout() {
    this.logged = false;
  }
  showList() {
    this.toggleLink = true;
  }
  hideList() {
    this.toggleLink = false;
  }


}
