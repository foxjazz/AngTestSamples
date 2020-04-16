import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-stuff',
  templateUrl: './input-stuff.component.html',
  styleUrls: ['./input-stuff.component.css']
})
export class InputStuffComponent implements OnInit {

  myStuff: string;
  constructor() { }

  ngOnInit() {
  }

}
