import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FireconnectService } from './fireconnect.service';
import { ListComponent } from './list/list.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';

import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    TeachersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAdv7zfZI2lxMdhvA_rbcR1fAiKru5GUYc",
      authDomain: "viewer-d29cc.firebaseapp.com",
      databaseURL: "https://viewer-d29cc-default-rtdb.firebaseio.com",
      projectId: "viewer-d29cc",
      storageBucket: "viewer-d29cc.appspot.com",
      messagingSenderId: "570375814539",
      appId: "1:570375814539:web:c7053f6c7120d5dd07838e",
      measurementId: "G-CK8W5LYD04"
    }),
    AngularFireStorageModule
  ],
  providers: [FireconnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
