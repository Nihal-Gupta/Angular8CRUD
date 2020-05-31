import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { ProductsService } from '../products.service';// this is service call , so we included ../ as pre fix. This is different then normal package inport

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm: FormGroup; // angForm=useer defined its like object declaration of class. U can do like  angForm : 'Hello', this is hard coding and datatype will be Var like in Java script
  constructor(private fb: FormBuilder,private ps: ProductsService) {
    this.createForm();
   }

   public createForm() {
     this.angForm = this.fb.group({// angForm --> matches the name of the form in html, Its like defining the class of form to relate the vaidation and all in backedn
      ProductName : ['', Validators.required], // try removing '' and try
      ProductDescription : ['',  Validators.required],//  ProductDescription -->this should match with the formCOntrolName in html file . This is like name or id in HTML and angular js. 
      ProductPrice : ['', Validators.required]
     });
   }
addProduct(ProductName, ProductDescription, ProductPrice) {  // this function is called from Html file and this function will call our service trough ps.addProduct. we can resuse our service from other .ts file
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);  
  }  
  ngOnInit() {
  }

}
