import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BillRecordInterface } from '../../models/bill-record-interface';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.css']
})
export class BillsTableComponent {

    displayedColumns = ['billName', 'dueDate', 'startingBalance',
        'amountDue', 'amtPaid', 'endBalance', 'datePaid', 'comments', 'paidBy', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    onEdit($event) {
        console.log($event);
    }

}


const ELEMENT_DATA: BillRecordInterface[] = [
    {
        billName: 'Capital One', amountDue: 100, amtPaid: 99, startingBalance: 1200, dueDate: new Date('1/1/2019').toDateString(),
        datePaid: new Date('1/1/2019').toDateString(), paidBy: 'Sarah Puhl', comments: 'woohoo', endBalance: 1101
    }
];