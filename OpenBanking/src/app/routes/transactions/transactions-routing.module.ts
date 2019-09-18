import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquireTransactionsComponent } from './inquire-transactions/inquire-transactions.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { CreateBeneficiaryComponent } from './create-beneficiary/create-beneficiary.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';

const routes: Routes = [
  {
    path: 'inquire-transactions',
    component: InquireTransactionsComponent,
    data: { title: 'Inquire Transactions' },
  },
  {
    path: 'fund-transfer',
    component: FundTransferComponent,
    data: { title: 'Fund Transfer' },
  },
  {
    path: 'create-beneficiary',
    component: CreateBeneficiaryComponent,
    data: { title: 'Create Beneficiary' },
  },
  {
    path: 'bill-payments',
    component: BillPaymentsComponent,
    data: { title: 'Bill Payments' },
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TransactionsRoutingModule {}
