import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products'; // hardcoded, try avoiding http local host

  constructor(private http: HttpClient) {

   }

    editProduct(id) {  
    return this  
            .http  
            .get(`${this.uri}/edit/${id}`);  
    }  
   getProducts() {  
    return this  
           .http  
           .get(`${this.uri}`);  
  }  
  deleteProduct(id) {  
    return this  
              .http  
              .get(`${this.uri}/delete/${id}`);  
  }  
  updateProduct(ProductName, ProductDescription, ProductPrice, id) {  
    const obj = {  
      ProductName,  
      ProductDescription,  
      ProductPrice  
    };  
    this  
      .http  
      .post(`${this.uri}/update/${id}`, obj)  
      .subscribe(res => console.log('Done'));  
}  
   addProduct( ProductName, ProductDescription, ProductPrice){// try finding it, not sure where this method is called, 
     const obj ={
       ProductName,
       ProductDescription,
       ProductPrice
     };

     console.log(obj);

     this.http.post(`${this.uri}/add`, obj) // thsi is same post like in Angular Js 1.2 used in ICM project to post wrapper, obj is wrapper , ``--> this symbol has to be used 
     .subscribe(res => console.log('Done')); // http can be declared anywhere in this class and it can be picked. Like in this class http is object of HttpClint and uri both created by me ,, res is response

   }
}
