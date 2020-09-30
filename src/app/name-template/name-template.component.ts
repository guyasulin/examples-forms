import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-name-template',
  templateUrl: './name-template.component.html',
  styleUrls: ['./name-template.component.scss']
})
export class NameTemplateComponent implements OnInit , AfterViewInit{

  @ViewChild('nameNgModel', {static:true}) NgModelInstans: NgModel;
 private _name:string = 'initial-value';

  set name(value) {
    this._name = value;
    console.log(value);
  } 

  get name(): string {
    return this._name ;
  } 
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.NgModelInstans.valueChanges.subscribe((value:string) => {
      console.log( `valueChanges ${value}` );
      
    })
  }
}
