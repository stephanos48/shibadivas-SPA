import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bruno',
  templateUrl: './bruno.component.html',
  styleUrls: ['./bruno.component.css']
})
export class BrunoComponent implements OnInit {

  bruno: any = '../assets/img/bruno1.jpg';
  bruno1: any = '../assets/img/bruno2.jpg';
  bruno2: any = '../assets/img/bruno3.jpg';
  bruno3: any = '../assets/img/bruno4.jpg';
  bruno4: any = '../assets/img/bruno5.jpg';
  bruno5: any = '../assets/img/bruno6.jpg';

  constructor() { }

  ngOnInit() {
  }

}
