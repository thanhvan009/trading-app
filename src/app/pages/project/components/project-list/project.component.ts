// Angular modules
import { NgClass, NgFor, NgIf } from '@angular/common';
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
import { JoinProjectModal } from '../join-project/join-project';
import { mockProjectListData, IProject } from '../../../../shared/mock-data/project.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    NgIf,
    NgClass,
    NgFor,
    ProgressBarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    JoinProjectModal,
  ],
})
export class ProjectComponent implements OnInit {
  displayedColumns: string[] = [
    'description',
    'projectId',
    'type',
    'owner',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<IProject>(mockProjectListData);
  @ViewChild(MatPaginator) paginator: any;
  dialog = inject(MatDialog);
  public selectedPage = 1;

  openModal() {
    this.dialog.open(JoinProjectModal, {
      width: '100%',
      panelClass: 'trade-modal',
      data: {
        title: 'Join Project',
        link: '',
      },
    });
  }

  constructor(public storeService: StoreService, public router: Router) {
    this.storeService.isLoading.set(true);
  }

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onEdit(projectId: number) {
    this.router.navigate(['/projects/project-detail', projectId]);
  }
  onAddNew() {
    this.router.navigate(['/projects/project-detail']);
  }

  onShare(element: IProject) {
    this.dialog.open(JoinProjectModal, {
      width: '800px',
      panelClass: 'trade-modal',
      data: {
        title: 'Share Project',
        link: '',
      },
    });
  }

  onClickPage(item: number | string) {
    if (typeof item == 'number') {
      this.storeService.isLoading.set(true);
      this.selectedPage = item;
      setTimeout((_) => {
        this.storeService.isLoading.set(false);
      }, 1000)
    } else if (item == 'prev') {
      //
    } else {
      //
    }
  }
}
