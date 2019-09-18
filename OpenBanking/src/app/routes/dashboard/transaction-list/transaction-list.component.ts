import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { description: 'Payroll Deposit - Hotel1', debit: 1234.00, credit: 1.0079, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel2', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel3', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel4', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel5', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel6', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel7', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel8', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel9', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel10', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel11', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel12', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel13', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel14', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel15', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel16', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel49', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel67', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 10.811, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 1.0079, balance: 1234.00, },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 4.0026, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel55', debit: 1234.00, credit: 6.941, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel', debit: 1234.00, credit: 9.0122, balance: 1234.00 },
  { description: 'Payroll Deposit - Hotel44', debit: 1234.00, credit: 10.811, balance: 1234.00 },
];

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  
   
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['description', 'debit', 'credit', 'balance'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
