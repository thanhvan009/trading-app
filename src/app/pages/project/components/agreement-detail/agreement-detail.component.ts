import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ITask, mockTasksData } from 'src/app/shared/mock-data/tasks.mock';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { statusesApprovalData } from 'src/app/shared/constants/constants.data';
import moment from 'moment';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'agreement-detail',
  templateUrl: './agreement-detail.component.html',
  standalone: true,
  styleUrls: ['./agreement-detail.component.scss'],
  imports: [MatDialogTitle, MatDialogContent, MatTableModule, MatFormFieldModule, NgClass,
    NgIf,
    NgFor, MatSelectModule, MatIconModule],
})
export class AgreementDetail {
  data = inject(MAT_DIALOG_DATA);
  constructor(public dialogRef: MatDialogRef<AgreementDetail>) { }
  statusesApproval: any[] = statusesApprovalData;
  displayedColumns: string[] = [
    'description',
    'startDate',
    'finishDate',
    'tradeApproval',
    'customerApproval',
    'ajudicatorApproval',
  ];
  dataSource: any = new MatTableDataSource<ITask>(mockTasksData);
  onClose() {
    this.dialogRef.close();
  }

  addRow() {
    let newRow = {
      description: '',
      startDate: moment(new Date()).format('DD/MM/YYYY'),
      finishDate: moment(new Date()).format('DD/MM/YYYY'),
      tradeApproval: '',
      customerApproval: '',
      ajudicatorApproval: '',
      editing: true
    };
    this.dataSource = new MatTableDataSource<ITask>([
      ...this.dataSource.data,
      newRow
    ])
  }

  changeApproval(e: any, type: string, index: number) {
    console.log(e.value)
    this.dataSource.data[index] = {
      ...this.dataSource.data[index],
      [type]: e.value,
    }

    this.dataSource = new MatTableDataSource<ITask>([
      ...this.dataSource.data,
    ])
  }
}
