import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mydata = JSON.parse('data');
alert(mydata[0].name);
alert(mydata[0].age);
alert(mydata[1].name);
alert(mydata[1].age);
  }

}
