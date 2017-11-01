import { Component } from '@angular/core';
import { StringWidget } from 'angular2-schema-form';

@Component({
  selector: 'app-ma-string-widget',
  template: `
    <mat-form-field>
      <input matInput 
             [placeholder]="schema.description" 
             [name]="name" 
             [attr.readonly]="schema.readOnly?true:null" 
             [attr.id]="id" [attr.disabled]="schema.readOnly?true:null" 
             [formControl]="control">
    </mat-form-field>
  `,
  styles: []
})
export class MaStringWidgetComponent extends StringWidget {}
