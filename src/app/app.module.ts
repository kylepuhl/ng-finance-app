import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { NgModule } from '../../node_modules/@angular/core';
import { MatTableModule, MatButtonModule, MatIconModule, MatGridListModule } from "../../node_modules/@angular/material";


// import { faMoneyBillAlt } from '../../node_modules/@fortawesome/fontawesome-free-regular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaycheckPanelComponent } from './components/paycheck-panel/paycheck-panel.component';
import { BillsTableComponent } from './components/bills-table/bills-table.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PaycheckPanelComponent,
        BillsTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
