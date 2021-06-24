import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  jaraiya: any = '../assets/img/jaraiya-small.jpg';
  pz: any = '../assets/img/persezeedonk.jpg';
  ritz: any = '../assets/img/ritz.jpg';
  pic1: any = '../assets/img/0623.jpeg';
  pfchang: any = '../assets/img/pfchang.jpg';

  constructor() { }

  ngOnInit() {
  }

}
