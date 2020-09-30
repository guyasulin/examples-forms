import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-reactive',
  templateUrl: './name-reactive.component.html',
  styleUrls: ['./name-reactive.component.scss']
})
export class NameReactiveComponent implements OnInit {
  nameFormControl: FormControl = new FormControl('initial value', [Validators.required, Validators.minLength(3)]);
  
  constructor() { }

  ngOnInit(): void {
    this.nameFormControl.valueChanges.subscribe((value: string )=> {
      console.log(value);
    })
  }

}
