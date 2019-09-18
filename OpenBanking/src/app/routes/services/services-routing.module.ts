import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollNewAccountComponent } from './enroll-new-account/enroll-new-account.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { EnrollCreditCardComponent } from './enroll-credit-card/enroll-credit-card.component';
import { CardReplacementComponent } from './card-replacement/card-replacement.component';
import { NewChequeBookComponent } from './new-cheque-book/new-cheque-book.component';

const routes: Routes = [
  {
    path: 'account-statement',
    component: AccountStatementComponent,
    data: { title: 'Account Statement' },
  },
  {
    path: 'enroll-new-account',
    component: EnrollNewAccountComponent,
    data: { title: 'Enroll New Account' },
  },
  {
    path: 'card-replacement',
    component: CardReplacementComponent,
    data: { title: 'Card Replacement' },
  },
  {
    path: 'enroll-credit-card',
    component: EnrollCreditCardComponent,
    data: { title: 'Enroll Credit Card' },
  },
  {
    path: 'new-cheque-book',
    component: NewChequeBookComponent,
    data: { title: 'New Cheque Book' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
