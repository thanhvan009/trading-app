import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { IRating, mockRatingData } from 'src/app/shared/mock-data/ratings.mock';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    NgIf,
    NgFor,
    NgClass,
    ProgressBarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class RatingComponent implements OnInit {
  displayedColumns: string[] = [
    'projectName',
    'projectId',
    'type',
    'owner',
    'rateStatus',
    'actions',
  ];
  dataSource = new MatTableDataSource<IRating>(mockRatingData);
  public selectedPage = 1;

  @ViewChild(MatPaginator) paginator: any;

  dialog = inject(MatDialog);

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

  onEdit(id: number) {
    this.router.navigate(['/ratings/rating-detail', id]);
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

