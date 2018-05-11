import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit { 
  two:number= 0;
  constructor(private service:DataServiceService) { }

  ngOnInit() {
  }
  onAdd()
  {
    this.two++;
    this.service.getSecondVal(this.two)
    
    
   
  }
  onDelete()
  {
    this.two--;
    this.service.getSecondVal(this.two)
  }


}
