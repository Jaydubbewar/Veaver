import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import{ CityService } from '../City.service'
import {Subject,Observable,combineLatest} from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  constructor(private service:CityService, private afs:AngularFirestore) { }

  searchTerm: string='';

  startAt = new Subject();
  endAt = new Subject();
  
  clubs:any;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();


  products: any;

ngOnInit(): void {
  

  this.getProductStock('arts');

  combineLatest([this.startobs,this.endobs]).subscribe((value)=>{
    this.firequery(value[0],value[1]).subscribe((names) =>{
      this.clubs = names;      
    })
  })
}

firequery(start:any, end:any){
  return this.afs.collection('coach',ref=>ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
}

search($event:any){
  let q = $event.target.value;
  this.startAt.next(q);
  this.endAt.next(q + "\uf8ff")
}



async getProductStock(sub:any) {
  this.products = await this.service.getCoach(sub);
  console.log(this.products); 
}
 
}
