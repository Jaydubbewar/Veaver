import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FireconnectService } from '../fireconnect.service';
import { Teacher } from '../Teacher.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Users: Teacher[]=[];
  ngOnInit(): void {
    this.show();
  }
  
  constructor(private _fireService:FireconnectService){  }
  teachers :any

  show(){    
    this.teachers = this._fireService.teachersInfo()
    this.teachers.subscribe((users: any[])=>{
      this.Users=users;
    })
  }

}
