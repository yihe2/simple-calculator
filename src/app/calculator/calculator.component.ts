import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand = false;

  appendNumber(number: string) {
    if (this.waitingForSecondOperand) {
      this.display = number;
      this.waitingForSecondOperand = false;
    } else {
      this.display = this.display === '0' ? number : this.display + number;
    }
  }

  setOperation(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
    } else if (this.operator) {
      const result = this.calculateResult(this.firstOperand, this.operator, parseFloat(this.display));
      this.display = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitingForSecondOperand = true;
  }

  calculate() {
    if (this.firstOperand !== null && this.operator) {
      this.display = String(this.calculateResult(this.firstOperand, this.operator, parseFloat(this.display)));
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  clear() {
    this.display = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  private calculateResult(first: number, operator: string, second: number): number {
    switch (operator) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return second !== 0 ? first / second : 0;
      default: return second;
    }
  }
}