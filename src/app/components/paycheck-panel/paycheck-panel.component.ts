import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paycheck-panel',
  templateUrl: './paycheck-panel.component.html',
  styleUrls: ['./paycheck-panel.component.css']
})
export class PaycheckPanelComponent implements OnInit {

    dateArray: Date[] = [
        new Date("01/12/2018"),
        new Date("01/25/2018"),
        new Date("02/09/2018"),
        new Date("02/23/2018"),
        new Date("03/09/2018"),
        new Date("03/23/2018"),
        new Date("04/06/2018"),
        new Date("04/20/2018"),
        new Date("05/04/2018"),
        new Date("05/18/2018"),
        new Date("06/01/2018"),
        new Date("06/15/2018"),
        new Date("06/29/2018"),
        new Date("07/13/2018"),
        new Date("07/27/2018"),
        new Date("08/10/2018"),
        new Date("08/24/2018"),
        new Date("09/07/2018"),
        new Date("09/21/2018"),
        new Date("10/05/2018"),
        new Date("10/19/2018"),
        new Date("11/02/2018"),
        new Date("11/16/2018"),
        new Date("11/30/2018"),
        new Date("12/14/2018"),
        new Date("12/28/2018")

    ];
    todaysDate: Date;

    // Kyle's date variables
    kylesNextPaycheck: Date;
    kylesDaysUntilNextPaycheck: number;
    kyleDate: String;

    //Sarah's date variables
    sarahsNextPaycheck: Date;
    sarahsDaysUntilNextPaycheck: number;
    sarahDate: String;

    constructor() {
        this.todaysDate = new Date();
    }

    ngOnInit() {

        this.kylesNextPaycheck = new Date();
        this.sarahsNextPaycheck = new Date();

        // Loop through array to find next pay dates
        for (let date of this.dateArray) {
            if (date >= this.todaysDate) {
                this.kylesNextPaycheck.setDate(date.getDate());
                this.sarahsNextPaycheck.setDate(date.getDate() - 7);
                break;
            }
        }

        // Convert dates to string for display in template
        this.kyleDate = this.kylesNextPaycheck.toDateString();
        this.sarahDate = this.sarahsNextPaycheck.toDateString();

        // Calculate days until next paycheck for display in template
        this.kylesDaysUntilNextPaycheck = this.kylesNextPaycheck.getDate() - this.todaysDate.getDate();
        this.sarahsDaysUntilNextPaycheck = this.sarahsNextPaycheck.getDate() - this.todaysDate.getDate();
    }


}
