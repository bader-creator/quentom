import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isenabled: boolean = false;
  ShowButton(){
    this.isenabled =!this.isenabled;
}
}