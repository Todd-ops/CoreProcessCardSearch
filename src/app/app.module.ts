import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Plant5ProcessCardComponent } from './plant5-process-card/plant5-process-card.component';
import { Plant2070ProcessCardComponent } from './plant2070-process-card/plant2070-process-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/plant2070-process-card',
    pathMatch: 'full',
  },
  {
    path:'plant2070-process-card',
     component: Plant2070ProcessCardComponent,
  },
  {
    path:'plant5-process-card',
    component: Plant5ProcessCardComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
      Plant5ProcessCardComponent,
      Plant2070ProcessCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true
    }),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
