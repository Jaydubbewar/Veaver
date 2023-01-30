import { Component, OnInit } from '@angular/core';
import { FireconnectService } from '../fireconnect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private _fireService:FireconnectService){  }
  teachers :any
  ngOnInit(): void {
    this.teachers = this._fireService.teachersInfo;
    console.log(this.teachers);
  }

}
