import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements OnInit {
  DButtons: string[] = ['AC', 'CE'];
  buttons: string [] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];
  result : string = '';
  preValue : string = '';
  curValue : string = '';


  constructor() { }

  ngOnInit(): void {
  }

  addCalc(value : string) {
if (this.result != '') {
  this.preValue = this.curValue;
  this.curValue = value;
}

if (value == 'AC') {
  this.result = '';
} else if (value == 'CE') {
  this.result = this.preValue != '=' ? this.result.slice (0, -1) : this.result;
} else if (value == '=') {
  this.result = eval (this.result);
} else {
  this.result += value;
}
  }

}
