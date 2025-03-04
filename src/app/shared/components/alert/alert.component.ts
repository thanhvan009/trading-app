import { Component, Inject, Injectable, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [],
})

export class Alert {
  dialog = inject(MatDialog);
  data = '';
  constructor(public dialogRef: MatDialogRef<Alert>) {}

  openDialog() {
    const timeout = 100;
    const dialogRef = this.dialog.open(Alert, {
      width: '300px',
      data: {},
    });

    dialogRef.afterOpened().subscribe((_) => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
