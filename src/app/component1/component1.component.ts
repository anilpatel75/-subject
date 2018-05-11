import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  one:number=0;

  constructor( private service:DataServiceService) {  }

  ngOnInit() {
  }
  onAdd()
  {
    this.one++;
   
    this.service.getFirstVal(this.one);
  }
  onDelete()
  {
    this.one--;
    this.service.getFirstVal(this.one) 
  }

}
