import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {

  public items = [
    {display: 'Java', value: 1},
    {display: 'Angular', value: 2},
    {display: 'javascript', value: 3},
    {display: 'Node.js', value:4},
    {display: 'Html5', value:5},
    {display: 'CSS3', value:6}
  ];
  constructor() { }

  ngOnInit() {
  }

}


