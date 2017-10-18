import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyArtabK7Pdv1mOW5hOscCpJKZTeZSr4HqE",
    authDomain: "pepper-f82e3.firebaseapp.com",
    databaseURL: "https://pepper-f82e3.firebaseio.com",
    projectId: "pepper-f82e3",
    storageBucket: "",
    messagingSenderId: "242127246621"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
