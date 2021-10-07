import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements OnInit {
  longButtons: string[] = ['AC', 'CE'];
  buttons: string [] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  constructor() { }

  ngOnInit(): void {
  }

}
