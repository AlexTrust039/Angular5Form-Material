import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { NextComponent } from './next/next.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'next', component: NextComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TextMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
