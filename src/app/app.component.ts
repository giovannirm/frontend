import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor() {
    console.log("constructor APP")
  }

  ngOnInit(): void {
    console.log("inicializado APP")
  }
}
