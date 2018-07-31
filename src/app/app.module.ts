import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { NgModule } from '../../node_modules/@angular/core';
import {
    MatTableModule, MatButtonModule, MatIconModule, MatGridListModule,
    MatToolbarModule, MatMenuModule
} from "../../node_modules/@angular/material";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaycheckPanelComponent } from './components/paycheck-panel/paycheck-panel.component';
import { BillsTableComponent } from './components/bills-table/bills-table.component';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PaymentHistoryViewComponent } from "./components/payment-history-view/payment-history-view.component";
import { BillsViewComponent } from "./components/bills-view/bills-view.component";


const appRoutes: Routes = [
    { path: 'bills', component: BillsViewComponent },
    {
        path: 'payment-history',
        component: PaymentHistoryViewComponent,
        data: { title: 'Past Payments' }
    },
    { path: '',
        redirectTo: '/bills',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PaycheckPanelComponent,
        BillsTableComponent,
        BillsViewComponent,
        PaymentHistoryViewComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
