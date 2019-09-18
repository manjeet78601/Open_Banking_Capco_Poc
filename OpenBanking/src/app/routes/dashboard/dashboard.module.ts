import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ChartsComponent } from './charts/charts.component';

import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PaymentSchedulesComponent } from './payment-schedules/payment-schedules.component';
import { RecentActionComponent } from './recent-action/recent-action.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';



@NgModule({
  declarations: [
    AccountSummaryComponent, 
    AccountsComponent, 
    ChartsComponent, 
    ProfileInfoComponent,
    RecentActionComponent,
    PaymentSchedulesComponent,
    TransactionListComponent
  ],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
