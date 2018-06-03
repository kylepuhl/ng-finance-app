import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { NgModule } from '../../node_modules/@angular/core';

import { faMoneyBillAlt } from '../../node_modules/@fortawesome/fontawesome-free-regular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaycheckPanelComponent } from './components/paycheck-panel/paycheck-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PaycheckPanelComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
