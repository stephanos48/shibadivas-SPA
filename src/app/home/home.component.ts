import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shiba2: any = '../assets/img/shiba2.jpg';
  teresa: any = '../assets/img/teresa.JPG';
  zeedonk: any = '../assets/img/helen&perse2019.jpg';

  constructor() { }

  ngOnInit() {
  }

}
