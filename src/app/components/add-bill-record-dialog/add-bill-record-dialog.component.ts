import { Component, Inject, OnInit } from '@angular/core';
import { BillRecordInterface } from "../../models/bill-record-interface";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-bill-record-dialog',
    templateUrl: './add-bill-record-dialog.component.html',
    styleUrls: ['./add-bill-record-dialog.component.css']
})
export class AddBillRecordDialogComponent implements OnInit {

    form: FormGroup;
    newBillRecord: BillRecordInterface;

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddBillRecordDialogComponent>) {

    }

    ngOnInit() {
        this.form = this.fb.group({

        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
