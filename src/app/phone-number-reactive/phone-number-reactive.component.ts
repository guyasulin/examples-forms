import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number-reactive',
  templateUrl: './phone-number-reactive.component.html',
  styleUrls: ['./phone-number-reactive.component.scss']
})
export class PhoneNumberReactiveComponent implements OnInit {

  // phoneNumbers: FormArray = new FormArray(
  //   [
  //     new FormGroup({
  //       prefix: new FormControl(),
  //       phoneNumber: new FormControl()
  //     })
  //   ]
  // );

  phoneNumbers: FormArray = this._builder.array(
    [
      this._builder.group({
        prefix:'',
        phoneNumber: ['', Validators.required]
      })
    ]
  )

  constructor(private _builder: FormBuilder) { }

  ngOnInit(): void {
    this.phoneNumbers.valueChanges.subscribe((value) => {
      console.log(value);
     })
  }

  addPhoneNumber() {
    this.phoneNumbers.push(new FormGroup({
      prefix: new FormControl(),
      phoneNumber: new FormControl()
    }))
  }

  printPhoneNumbers(){
   console.log(this.phoneNumbers.value);

  }
}
