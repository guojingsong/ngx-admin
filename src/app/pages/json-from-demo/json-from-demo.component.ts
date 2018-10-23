import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-json-from-demo',
  templateUrl: './json-from-demo.component.html',
  styleUrls: ['./json-from-demo.component.scss']
})
export class JsonFromDemoComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  
  constructor() { }

  ngOnInit() {
  }

}
