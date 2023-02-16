import { Component } from '@angular/core';
import { Vendor } from '../Vendor.model';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-city-vendor',
  templateUrl: './city-vendor.component.html',
  styleUrls: ['./city-vendor.component.css']
})
export class CityVendorComponent {
  VendorLogin!: FormGroup;

  vendorObj: Vendor={
    userId: '',
    name: '',
    experience: '',
    insName: '',
    subject: ''
  }



  constructor(private fb:FormBuilder, private FormMod:FormsModule, private afs:AngularFirestore){
    this.VendorLogin = this.fb.group({
      userId:'',
      name:'',
      emailid:'',
      experience:'',
      insName:'',
      subject:'',
      image:''
    })
  }

  addTeacher(){ 

    const {value } = this.VendorLogin
    console.log(value);
    this.vendorObj.userId='',
    this.vendorObj.name = value.name,
    this.vendorObj.experience = value.experience,
    this.vendorObj.insName = value.insName,
    this.vendorObj.subject = value.subject

    console.log(this.vendorObj);
    this.afs.collection('coach').doc().set(this.vendorObj);
  }

}
