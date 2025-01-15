import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

import {Component, inject} from '@angular/core';


@Component({
  selector: 'dialog-join-project',
  templateUrl: './dialog-join-project.html',
  standalone  : true,
  styleUrls   : ['./dialog-join-project.scss'],
  imports: [MatDialogTitle, MatDialogContent],
})


export class DialogJoinProject {
  data = inject(MAT_DIALOG_DATA);
}