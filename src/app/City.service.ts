import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient,private db: AngularFirestore) { }
    
  getCoach(name: string) {
    console.log(name)
    return new Promise<any>((resolve)=> {
      this.db.collection('coach', ref => ref.where('experience','>','1').where('subject', '==', name)).valueChanges().subscribe(supplier => resolve(supplier))
    })
  }

  addCoach(): any {
    return this.db.collection('coach').doc('LA').set({name:"ramu",city : 'pusad'});
   
  }


}
