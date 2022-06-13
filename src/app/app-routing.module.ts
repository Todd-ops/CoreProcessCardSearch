import { Plant2070ProcessCardComponent } from './plant2070-process-card/plant2070-process-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/plant2070-process-card',
    pathMatch: 'full',
  },
  // {
  //   path:'plant2070-process-card',
  //   redirectTo: component: Plant2070ProcessCardComponent
  // }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true
    }),
  ],
  exports: []
})
export class AppRoutingModule { }
