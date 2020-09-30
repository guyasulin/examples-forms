import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-reactive',
  template: `
        <div>
      <form [formGroup]="form" >
        <div>
        <label>First Name</label>
        <input type="text"  formControlName="firstName">
        </div>
        <div>
        <label>Last Name</label>
        <input type="text"  formControlName="lastName">
        </div>
     <div>
       <label>Phone</label>
        <input type="tel"   formControlName="phoneNumber">
        </div>
       <button type="submit" (click)="addContact()" [disabled]="!form.valid" >Save</button>
      </form>

      <div>
      <table>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Phone</th>
    </tr>
    <tr *ngFor="let contact of contacts">
    <td>{{ contact.firstName }}</td>
    <td>{{ contact.lastName }}</td>
    <td>{{ contact.phoneNumber }}</td>
  </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class TestReactiveComponent implements OnInit {

  form: FormGroup;
  contacts = [];

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['Guy', [
        Validators.required,
      ]],
      lastName: ['Asulin', [
        Validators.required,
      ]],
      phoneNumber: ['0509414540', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]],
    })
  }

  get lastName() {
    return this.form.get('lastName');
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  addContact() {
    
    this.contacts.push(this.form.value)
    console.log(this.contacts);
  }
}
