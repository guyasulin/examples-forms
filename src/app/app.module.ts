import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameReactiveComponent } from './name-reactive/name-reactive.component';
import { NameTemplateComponent } from './name-template/name-template.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { PhoneNumberReactiveComponent } from './phone-number-reactive/phone-number-reactive.component';
import { TodoAutocompleteComponent } from './todo-autocomplete/todo-autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { TestReactiveComponent } from './test-reactive/test-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    NameReactiveComponent,
    NameTemplateComponent,
    LoginReactiveComponent,
    LoginTemplateComponent,
    PhoneNumberReactiveComponent,
    TodoAutocompleteComponent,
    TestComponent,
    TestReactiveComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
