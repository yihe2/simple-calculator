import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {CalculatorComponent} from './calculator/calculator.component';

export const routes: Routes = [
    { path: '', component: FirstComponent , outlet: "first"},
    { path: '', component: CalculatorComponent},
  ];