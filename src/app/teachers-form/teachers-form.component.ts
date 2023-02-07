import { Component,ViewChild } from '@angular/core';
import { Teacher} from '../Teacher.model'
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FireconnectService } from '../fireconnect.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent {

  teacherLogin!: FormGroup;

  teacherObj: Teacher={
    userId: '',
    name: '',
    experience: '',
    emailid: '',
    passwd: '',
    insName: '',
    subject: '',
    image: ''
  }



  constructor(private fb:FormBuilder,private af:AngularFireStorage, private FormMod:FormsModule,private http:HttpClient, private fireCon : FireconnectService){
    this.teacherLogin = this.fb.group({
      userId:'',
      name:'',
      emailid:'',
      experience:'',
      insName:'',
      subject:'',
      image:''
    })
  }

  path:string="hello"

  addTeacher(){ 

    const {value } = this.teacherLogin
    console.log(value);
    this.teacherObj.userId='',
    this.teacherObj.name = value.name,
    this.teacherObj.emailid = value.emailid,
    this.teacherObj.experience = value.experience,
    this.teacherObj.insName = value.insName,
    this.teacherObj.subject = value.subject,
    this.teacherObj.image = this.path

    console.log(this.teacherObj);
    this.fireCon.addTeacher(this.teacherObj).subscribe()   
    
  }

  async upload($event:any){
    
    this.path=$event.target.files[0]

    let aa = "/files"+Math.random()+this.path
    await this.af.upload(aa,this.path)
    console.log(aa)
    await this.af.ref(aa).getDownloadURL().subscribe((url)=>{this.path = url})
    
  }


 
}
