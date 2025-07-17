import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnnualInvestment } from '../app.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) annualData!: AnnualInvestment[];
}
