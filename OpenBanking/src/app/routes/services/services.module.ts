import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { EnrollNewAccountComponent } from './enroll-new-account/enroll-new-account.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { NewChequeBookComponent } from './new-cheque-book/new-cheque-book.component';
import { CardReplacementComponent } from './card-replacement/card-replacement.component';
import { EnrollCreditCardComponent } from './enroll-credit-card/enroll-credit-card.component';

@NgModule({
  declarations: [EnrollNewAccountComponent, AccountStatementComponent, NewChequeBookComponent, CardReplacementComponent, EnrollCreditCardComponent],
  imports: [CommonModule, SharedModule, ServicesRoutingModule],
})
export class ServicesModule {}
