import { Injectable,  EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService  {
  private one:number;
  private two :number;
  
   private total =new BehaviorSubject<any>(0);
   totalnumber =this.total.asObservable();
  

  constructor() { 
   
  }
  getFirstVal(value)
  {
   this.one =  value;
   this.getTotal();
  }
  getSecondVal(value)
  {
     this.two = value;
     this.getTotal();
  }

   getTotal()
  {  
      this.total.next(this.oncheck());
  }
  oncheck()
  {
   if(this.one == undefined && this.two == undefined)
   {
     return 0;
   }
   else if(this.one == undefined)
   {
     return 0 + this.two;

   }
   else if(this.two == undefined)
   {
     return this.one + 0;
   }
   else{
     return this.one + this.two;
   }
   }

   

  

} 
