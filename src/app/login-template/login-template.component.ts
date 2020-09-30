import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('form', {static:true}) form: NgForm;
  email:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

  submitLogin(val) {
      console.log(val);
  }

  ngAfterViewInit(){
    this.form.valueChanges.subscribe(val => {
      console.log(val);
      
    })
  }
}
