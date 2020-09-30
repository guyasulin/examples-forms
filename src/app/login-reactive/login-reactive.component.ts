import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {

  login: FormGroup = new FormGroup({
    email: new FormControl('initial@gmail.com',),
    password: new FormControl('initial password'),
  })
  constructor() { }

  ngOnInit(): void {
    this.login.valueChanges.subscribe(value => {
      console.log(value);
    });

  }

  submitLogin() {
    console.log(this.login.value);
    
  }  
}
