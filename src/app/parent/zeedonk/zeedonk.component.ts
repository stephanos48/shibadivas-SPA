import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zeedonk',
  templateUrl: './zeedonk.component.html',
  styleUrls: ['./zeedonk.component.css']
})
export class ZeedonkComponent implements OnInit {
  pz: any = '../assets/img/persezeedonk.jpg';
  hug: any = '../assets/img/hug.jpg';
  bath: any = '../assets/img/bath.jpg';
  perse12: any = '../assets/img/perse12.jpg';

  constructor() { }

  ngOnInit() {
  }

}
