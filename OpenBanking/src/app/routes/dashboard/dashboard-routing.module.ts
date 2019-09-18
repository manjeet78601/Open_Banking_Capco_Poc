import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {
    path: 'account-summary',
    component: AccountSummaryComponent,
    data: { title: 'Account Summary' },
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    data: { title: 'Accounts' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
