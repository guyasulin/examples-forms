import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';


@Component({
	selector: 'app-test',
	template: `
    <div>
      <form #form="ngForm" (ngSubmit)="addContact(form.value)">
        <div>
        <label>First Name</label>
        <input type="text" name="firstName" [(ngModel)]="firstName" required>
        </div>
        <div>
        <label>Last Name</label>
        <input type="text" name="lastName"  [(ngModel)]="lastName" required>
        </div>
     <div>
       <label>Phone</label>
        <input type="tel" name="phoneNumber" (keypress)="numberOnly($event)" [(ngModel)]="phoneNumber"  maxlength="10" required>
        </div>
       <button type="submit" [disabled]="form.invalid">Save</button>
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
  table, th, td {
      border: 1px solid black;
      
    }
    `
  ]
})

export class TestComponent implements OnInit {

	@ViewChild('form', { static: true })	form: NgForm;
  public contacts = [];
  firstName: string = 'guy';
  lastName: string = 'Asulin';
  phoneNumber: any = '0509414540';
  
  constructor() {}

	ngOnInit(): void {}

	addContact(val) {
      this.contacts.push(val)
      this.contacts.sort((a, b) => a.firstName < b.firstName ? -1 : 1);
       console.log(this.contacts);
  }
  
  numberOnly(event):boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
