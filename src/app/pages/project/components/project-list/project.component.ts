// Angular modules
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';

// Services
import { StoreService } from '@services/store.service';

// Components
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';

import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogJoinProject } from '../dialog-join-project/dialog-join-project';
import { projectDataMock, IProject } from './configs/project.mock';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    NgIf,
    ProgressBarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DialogJoinProject,
  ],
})
export class ProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'projectId',
    'description',
    'type',
    'owner',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<IProject>(projectDataMock);
  @ViewChild(MatPaginator) paginator: any;
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogJoinProject, {
      width: '800px',
      panelClass: 'custom-dialog',
    });
  }

  constructor(public storeService: StoreService) {}

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
