import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {util} from '../../../../shared/util';

@Component({
  selector: 'app-customelement',
  templateUrl: './customelement.component.html',
  styleUrls: ['./customelement.component.scss'],
  encapsulation: ViewEncapsulation.None // <- this allows CSS to bleed to this component from parent app
})
export class CustomelementComponent implements OnInit {

  @Input() name: string;
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();


  value = '';
  store;
  constructor() { 
  	this.store = util.getStore();
  }

  ngOnInit() {
  }

  onclick() {
  	console.log('clicked', this.value);
  	this.store.setVal('key', this.value);
  }

  update(value: string) { 
  	this.value = value; 
  }

}
