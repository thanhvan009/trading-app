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
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    NgIf,
    ProgressBarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class RatingComponent implements OnInit {
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'type',
    'owner',
    'rateStatus',
    'actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  dialog = inject(MatDialog);

  openDialog() {
    //
  }

  constructor(public storeService: StoreService, public router: Router) {}

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onEdit(id: number) {
    this.router.navigate(['/ratings/rating-detail', id]);
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface PeriodicElement {
  projectId: number;
  projectName: string;
  type: number;
  owner: string;
  rateStatus: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    projectId: 1,
    projectName: 'Hydrogen',
    type: 1.0079,
    owner: 'H',
    rateStatus: 'Active',
  },
  {
    projectId: 2,
    projectName: 'Helium',
    type: 4.0026,
    owner: 'He',
    rateStatus: 'Active',
  },
  {
    projectId: 3,
    projectName: 'Lithium',
    type: 6.941,
    owner: 'Li',
    rateStatus: 'Active',
  },
  {
    projectId: 4,
    projectName: 'Beryllium',
    type: 9.0122,
    owner: 'Be',
    rateStatus: 'Active',
  },
  {
    projectId: 5,
    projectName: 'Boron',
    type: 10.811,
    owner: 'B',
    rateStatus: 'Active',
  },
  {
    projectId: 6,
    projectName: 'Carbon',
    type: 12.0107,
    owner: 'C',
    rateStatus: 'Active',
  },
  {
    projectId: 7,
    projectName: 'Nitrogen',
    type: 14.0067,
    owner: 'N',
    rateStatus: 'Active',
  },
  {
    projectId: 8,
    projectName: 'Oxygen',
    type: 15.9994,
    owner: 'O',
    rateStatus: 'Active',
  },
];
