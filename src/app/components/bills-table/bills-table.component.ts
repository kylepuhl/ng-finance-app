import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { BillRecordInterface } from '../../models/bill-record-interface';
import { AddBillRecordDialogComponent } from '../add-bill-record-dialog/add-bill-record-dialog.component';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.css']
})
export class BillsTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ['billName', 'minPayment', 'dueDate', 'lastPaid', 'actions'];
    dataSource: MatTableDataSource<BillRecordInterface>;
    BILL_DATA: BillRecordInterface[] = [
        {
            billName: 'Capital One', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Barclay Card (Apple)', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Volkswagen GTI', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Lincoln MKC', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Verizon Wireless', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'CoServ Energy', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Netflix', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Hulu', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Atmos Energy', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Nationwide Pet Insurance', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Frontier Communications', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Compassion International', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Line of Credit (Tower FCU)', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        },
        {
            billName: 'Mortgage', minPayment: 100, dueDate: new Date('1/1/2019').toDateString(), lastPaid: new Date().toDateString()
        }
    ];

    constructor(public dialog: MatDialog) {
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.BILL_DATA);
    }

    ngOnInit() {
        // Bind paginator and sort to data
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onEdit($event) {
        console.log($event);
    }

    onDelete($event) {

    }

    openUrl(row) {
        switch(row.billName) {
            case 'Capital One':
                window.open('https://verified.capitalone.com/sic-ui/#/esignin', '_blank');
                break;
            case 'Barclay Card (Apple)':
                window.open('https://www.barclaycardus.com/servicing/accountSummary', '_blanke');
                break;
            case 'Volkswagen GTI':
                window.open('https://www.vwcredit.com/Authentication/Login', '_blank');
                break;
            case 'Lincoln MKC':
                window.open('https://www.credit.lincoln.com/globalaccountmgr/glamWAR/restServlet/global/loginService/amo/linc/US/en', '_blank');
                break;
            case 'Verizon Wireless':
                window.open('https://www.verizonwireless.com/my-verizon/', '_blank');
                break;
            case 'CoServ Energy':
                window.open('https://myaccount.coserv.com/', '_blank');
                break;
            case 'Netflix':
                window.open('https://www.netflix.com/login', '_blank');
                break;
            case 'Hulu':
                window.open('https://www.hulu.com/welcome', '_blank');
                break;
            case 'Atmos Energy':
                window.open('https://www.atmosenergy.com/accountcenter/logon/login.html', '_blank');
                break;
            case 'Nationwide Pet Insurance':
                window.open('https://my.petinsurance.com/', '_blank');
                break;
            case 'Hulu':
                window.open('https://auth.hulu.com/web/login/', '_blank');
                break;
            case 'Compassion International':
                window.open('https://www.compassion.com/account/login.htm', '_blank');
                break;
            case 'Line of Credit (Tower FCU)':
                window.open('https://www.towerfcu.org', '_blank');
                break;
            case 'Mortgage':
                window.open('https://myidlogin.com/gwa/UserAccount/Login', '_blank');
                break;
        }
    }

    addBill(): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(AddBillRecordDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );
    }

}


