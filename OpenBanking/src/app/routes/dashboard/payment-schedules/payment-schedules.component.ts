import { Component, OnInit } from '@angular/core';

const MESSAGES = [
  {
    img: './assets/images/icons/hdfc-bank-logo.jpg',
    bank: 'HDFC Credit Card Payment',
    date: `03 August 2019`,
    amount: '$ 100'
  },
  {
    img: './assets/images/icons/sbi-logo.svg',
    bank: 'SBI',
    date: `03 August 2019`,
    amount: '$ 250'
  },
  {
    img: './assets/images/icons/group.svg',
    bank: 'Room Rent Payment',
    date: `03 August 2019`,
    amount: '$ 200'
  },
  {
    img: './assets/images/icons/airtel-logo-white-text-vertical.jpg',
    bank: 'Airtel Postpaid Bill Payment',
    date: `03 August 2019`,
    amount: '$ 250'
  },
];

@Component({
  selector: 'payment-schedules',
  templateUrl: './payment-schedules.component.html',
  styleUrls: ['./payment-schedules.component.scss']
})
export class PaymentSchedulesComponent implements OnInit {
  messages = MESSAGES;
  constructor() { }

  ngOnInit() {
  }

}
