import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
 three:any=0;
  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.service.totalnumber.subscribe(data=>
    {
      this.three = data;
        })
    
  }
 

  
  

  }
