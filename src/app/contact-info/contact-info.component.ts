import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor() { }
  data  = {
    name:{value:'',type:'text'},
    address:{value:'',type:'text'},
    phone:{value:'',type:'phone'},
    city:{value:'',type:'text'},
    state:{value:'',type:'text'},
    zip:{value:'',type:'text'},
    dob:{value:'',type:'date'},
  }
  ngOnInit() {
  }

}