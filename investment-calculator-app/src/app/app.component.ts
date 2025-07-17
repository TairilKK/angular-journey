import { Component } from '@angular/core';
import { AnnualInvestment } from './app.model';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData: AnnualInvestment[] = [];
  onCalculate(annualData: AnnualInvestment[]) {
    console.log(annualData);
    this.annualData = annualData;
  }
}
