import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-autocomplete',
  templateUrl: './todo-autocomplete.component.html',
  styleUrls: ['./todo-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TodoAutocompleteComponent)
    }
  ]
})
export class TodoAutocompleteComponent implements OnInit, ControlValueAccessor {

  public searchInput: FormControl = new FormControl('');
  public touchedCB;
  private _ChangeCB;
  todoItems$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.todoItems$ = this.searchInput.valueChanges.pipe(
      debounceTime(1000),
      mergeMap((searchString: string) => this.http.get(`https://jsonplaceholder.typicode.com/posts/?format=json&search=${searchString}`))
    )
  }
 
  writeValue(value:any) {

  }

  registerOnChange(OnChangeCB) {
    this._ChangeCB = OnChangeCB
  }

  registerOnTouched(onTouched) {
  this.touchedCB = onTouched
  }


  setTodoItem(todoItem: any){
    this._ChangeCB = todoItem;
  }
}
