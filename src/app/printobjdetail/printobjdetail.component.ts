
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-printobjdetail',
  templateUrl: './printobjdetail.component.html',
  styleUrls: ['./printobjdetail.component.css']
})
export class PrintobjdetailComponent implements OnInit {
  itemobj_array! :Item[];
  
  // itemobj : {
  //   itemid: 1;
  //   itemname: "abc";
  //   price: 10020;
  // } | undefined
  constructor() { 
    
   this.itemobj_array=[
    {itemid:1,itemname:"mobile",price:12000},
    {itemid:2,itemname:"telivision",price:29000},
    {itemid:3,itemname:"refrigerator",price:26000}
   ]

  }
 ngOnInit(): void {
  }

}
