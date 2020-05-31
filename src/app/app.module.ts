import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';// full path to the .ts file use ./ if its user defined
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { Routes, RouterModule } from '@angular/router';  
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';// in this case we didnt used ./ because folder is present in ng-module so full folder  is imported 
import { ReactiveFormsModule } from '@angular/forms';// for form validation provided by angualr
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

const route: Routes = [

  {
    path:'product/create',
    component: ProductAddComponent
  },
  {
    path:'edit/:id',
    component: ProductEditComponent
  },
  {
    path:'products',
    component: ProductGetComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,// Declare only component
  ],
  imports: [
    BrowserModule,// all other imports 
    RouterModule.forRoot(route),
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService], // service are imported here, not sure but most probabaly
  bootstrap: [AppComponent]
})
export class AppModule { }
