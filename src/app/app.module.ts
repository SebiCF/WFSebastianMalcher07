import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms' ;


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { TravelsComponent } from './travels/travels.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelService } from './shared/travels.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';






@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelsListComponent,
    NavbarComponent,
    HomepageComponent,
    BlogpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // we called initializeApp function to provide connection details
    AngularFireDatabaseModule, // we will import the classes here too
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatStepperModule,
  ],
  providers: [TravelService, MatNativeDateModule],
  
  bootstrap: [AppComponent]
 })
 export class AppModule { }



