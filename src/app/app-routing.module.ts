import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books/books.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { ReadersComponent } from './readers/readers/readers.component';

const appRoutes : Routes = [
  { path: '',   redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path:'books' , component : BooksComponent},
  { path:'readers' , component : ReadersComponent},
];
@NgModule({
  declarations: [AboutMeComponent,
    BooksComponent,
    ReadersComponent,],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only),
    CommonModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
