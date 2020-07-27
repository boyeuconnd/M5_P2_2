import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontsizechance',
  templateUrl: './fontsizechance.component.html',
  styleUrls: ['./fontsizechance.component.css']
})
export class FontsizechanceComponent implements OnInit {

  fontSize = 14;

  constructor() { }
  onChange(value) {
    this.fontSize = value;
  }
  ngOnInit(): void {
  }

}


