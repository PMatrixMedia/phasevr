import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
