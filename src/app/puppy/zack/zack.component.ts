import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zack',
  templateUrl: './zack.component.html',
  styleUrls: ['./zack.component.css']
})
export class ZackComponent implements OnInit {
  zack3: any = '../assets/img/zack3.jpg';
  zack4: any = '../assets/img/zack4.jpg';
  zack5: any = '../assets/img/zack5.jpg';
  zack6: any = '../assets/img/zack6.jpg';

  constructor() { }

  ngOnInit() {
  }

}
