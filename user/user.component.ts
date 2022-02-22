import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = "rabi3"
  message =""
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.name
  }

}
