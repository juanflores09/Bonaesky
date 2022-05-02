import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Array<any> = []

  constructor(private api : ApiService) { 
    this.api.getProduct().subscribe((resp:any)=>{
      console.log(resp);
      this.products = resp;
    })
  }
  
  ngOnInit(): void {

  }


}
