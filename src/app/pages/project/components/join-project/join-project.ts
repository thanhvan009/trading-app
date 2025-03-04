import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

import { Component, inject } from '@angular/core';

@Component({
  selector: 'join-project',
  templateUrl: './join-project.html',
  standalone: true,
  styleUrls: ['./join-project.scss'],
  imports: [MatDialogTitle, MatDialogContent],
})
export class JoinProjectModal {
  data = inject(MAT_DIALOG_DATA);
  constructor(public dialogRef: MatDialogRef<JoinProjectModal>) {}

  onClose() {
    this.dialogRef.close();
  }
  onJoin() {
    this.dialogRef.close();
  }
}
