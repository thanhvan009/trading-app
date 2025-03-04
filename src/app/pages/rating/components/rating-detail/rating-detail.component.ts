import { NgClass, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { StoreService } from '@services/store.service';
import { MatIconModule } from '@angular/material/icon';
import { mockRatingDetailData } from 'src/app/shared/mock-data/ratings.mock';
import { ToastManager } from '@blocks/toast/toast.manager';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    NgFor,
    TranslateModule,
    MatIconModule,
  ],
})
export class RatingDetailComponent {
  displayedColumns: string[] = [
    'description',
    'createdBy',
    'date',
    'tradeApproval',
    'customerApproval',
  ];
  selectedIndex: number = 0;
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    tradeName: FormControl<string | null>;
    ratingNumber: FormControl<string | null>;
    time: FormControl<string | null>;
    cost: FormControl<string | null>;
    workmanship: FormControl<string | null>;
    yourReviews: FormControl<string | null>;
  }>;
  private ratingId: number;
  model: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService,
    public toastManager: ToastManager,
  ) {
    this.storeService.isLoading.set(true);
    this.ratingId = +this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.ratingId) {
      this.model = {
        ...mockRatingDetailData
      };
      if (this.ratingId) {
        this.selectedIndex = this.model.ratingNumber;
      }
    } else {
      this.model = {
        ratingId: '',
        tradeName: '',
        time: '',
        cost: '',
        workmanship: '',
        yourReviews: '',
        ratingNumber: '0',
      };
    }
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      tradeName: new FormControl<string | null>(
        {
          value: this.model.tradeName,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      time: new FormControl<string>({
        value: this.model.time,
        disabled: false,
      }),
      cost: new FormControl<string | null>({
        value: this.model.cost,
        disabled: false,
      }),
      ratingNumber: new FormControl<string | null>({
        value: this.model.ratingNumber,
        disabled: false,
      }),
      workmanship: new FormControl<string | null>(
        {
          value: this.model.tradeName,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      yourReviews: new FormControl<string | null>(
        {
          value: this.model.yourReviews,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });

  }

  onClickStar(index: number) {
    this.selectedIndex = index;
  }

  public onCancel() {
    this.router.navigate(['/ratings']);
  }
  public onClickSubmit() {
    this.toastManager.quickShow('Rating was saved successfully', 'success', true);
    this.router.navigate(['/ratings']);
  }
}
