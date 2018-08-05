import {Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource, MatDialogConfig} from '@angular/material';
import {BillRecordInterface} from '../../models/bill-record-interface';
import {AddBillRecordDialogComponent} from '../add-bill-record-dialog/add-bill-record-dialog.component';

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
            billName: 'Capital One',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://verified.capitalone.com/sic-ui/#/esignin'
        },
        {
            billName: 'Barclay Card (Apple)',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.barclaycardus.com/servicing/accountSummary'
        },
        {
            billName: 'Volkswagen GTI',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.vwcredit.com/Authentication/Login'
        },
        {
            billName: 'Lincoln MKC',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.credit.lincoln.com/globalaccountmgr/glamWAR/restServlet/global/loginService/amo/linc/US/en'
        },
        {
            billName: 'Verizon Wireless',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.verizonwireless.com/my-verizon/'
        },
        {
            billName: 'CoServ Energy',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://myaccount.coserv.com/'
        },
        {
            billName: 'Netflix',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.netflix.com/login'
        },
        {
            billName: 'Hulu',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.hulu.com/welcome'
        },
        {
            billName: 'Atmos Energy',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.atmosenergy.com/accountcenter/logon/login.html'
        },
        {
            billName: 'Nationwide Pet Insurance',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://my.petinsurance.com/'
        },
        {
            billName: 'Frontier Communications',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://frontier.com/login'
        },
        {
            billName: 'Compassion International',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.compassion.com/account/login.htm'
        },
        {
            billName: 'Line of Credit (Tower FCU)',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://www.towerfcu.org'
        },
        {
            billName: 'Mortgage',
            minPayment: 100,
            dueDate: new Date('1/1/2019'),
            lastPaid: new Date(),
            url: 'https://myidlogin.com/gwa/UserAccount/Login'
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

    // TODO: implement call to data service to UPDATE DB record
    editBill($event) {
        console.log($event);
    }

    // TODO: implement call to data service to DELTE DB record
    deleteBill($event) {
        console.log($event);
    }

    // TODO: implement call to data service to POST DB record
    addBill(): void {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(AddBillRecordDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );
    }

    // Method receives url attribute from bill object and opens URL in new window
    openUrl(url) {
        window.open(url, '_blank');
    }

}


