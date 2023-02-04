import { Component,ViewChild } from '@angular/core';
import { Teacher} from '../Teacher.model'
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FireconnectService } from '../fireconnect.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent {
  @ViewChild('teacherLogin')
  teacherLogin!: NgForm;
  constructor(private FormMod:FormsModule,private http:HttpClient, private fireCon : FireconnectService){}

  addTeacher(data:Teacher[]){   
    console.log(data);
    this.fireCon.addTeacher(data).subscribe()    
    
  }
}
