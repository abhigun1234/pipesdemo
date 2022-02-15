import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtinpipe',
  templateUrl: './builtinpipe.component.html',
  styleUrls: ['./builtinpipe.component.css']
})
export class BuiltinpipeComponent implements OnInit {
  name ='abhishek'
  person ={name:'ravi',age:34}
  date=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
