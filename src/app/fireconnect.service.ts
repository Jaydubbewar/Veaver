import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher } from './Teacher.model';

@Injectable({
  providedIn: 'root'
})
export class FireconnectService {

  constructor(private http:HttpClient) { }
    
  
  addTeacher(teacher:Teacher){
    return this.http.post('https://viewer-d29cc-default-rtdb.firebaseio.com/teachers.json',teacher)
  }


  teachersInfo():Observable<Teacher[]>{
    let Users: any[]=[]
    return this.http.get<Teacher>('https://viewer-d29cc-default-rtdb.firebaseio.com/teachers.json')
    .pipe(map(resData=>{
      const userarray: any[] = [];
      
      for(const key in resData){
        const aa = resData[key as keyof Teacher]
        userarray.push({userId:key,...(typeof aa === 'object'?aa:{})})
      }
      return userarray
    }))
  }
}
