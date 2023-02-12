import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import{ CityService } from '../City.service'


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  constructor(private service:CityService) { }

  products: any;

ngOnInit(): void {
  this.getProductStock('arts');
}
async getProductStock(sub:any) {
  this.products = await this.service.getCoach(sub);
  console.log(this.products); 
}
 
}
