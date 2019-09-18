import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { CreateBeneficiaryComponent } from './create-beneficiary/create-beneficiary.component';
import { InquireTransactionsComponent } from './inquire-transactions/inquire-transactions.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';

@NgModule({
  declarations: [
    InquireTransactionsComponent,
    FundTransferComponent, 
    CreateBeneficiaryComponent, 
    BillPaymentsComponent
  ],
  imports: [CommonModule, SharedModule, TransactionsRoutingModule],
})
export class TransactionsModule {}
