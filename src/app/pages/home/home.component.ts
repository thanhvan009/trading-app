import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { extraResults, mockResults } from 'src/app/shared/mock-data/results.mock';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PageLayoutComponent,
    NgIf,
    ProgressBarComponent,
    PageLayoutComponent,
    NgIf,
    NgFor,
    NgClass,
    MatProgressSpinnerModule
  ],
})
export class HomeComponent implements OnInit {
  results: any = [];
  original: any = [];
  isLoadMore = false;
  isLoadMoreButton = false;
  activeType = '';
  public form!: FormGroup<{
    search: FormControl<string>;
  }>;
  constructor(public storeService: StoreService) {
    this.storeService.isLoading.set(true);
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [], nonNullable: true }
      ),
    });
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000);
  }

  onClickSubmit() {
    const keySearch = this.form.controls?.search?.value;
    this.activeType = '';
    if (keySearch) {
      this.isLoadMore = true;
      setTimeout((_) => {
        this.isLoadMore = false;
        this.results = [
          ...mockResults,
        ];
        this.original = [...this.results];
      }, 1000);
    } else {
      this.results = [];
    }
  }

  onClickCategory(type: string) {
    this.activeType = type;
    if (this.original?.length) {
      const original = [...this.original];
      this.results = original.filter((item: any) => item.type == type);
    }
  }

  onLoadMore() {
    if (this.isLoadMoreButton) {
      return;
    }
    this.isLoadMoreButton = true;
    setTimeout((_) => {
      this.isLoadMoreButton = false;
      this.results = [
        ...this.results,
        ...extraResults,
      ];
      this.original = [...this.results];
    }, 1000);
  }
}
