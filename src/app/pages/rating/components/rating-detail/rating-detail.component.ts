// Angular modules
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    TranslateModule,
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
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    yourReview: FormControl<string | null>;
    projectName: FormControl<string | null>;
    rating: FormControl<string | null>;
  }>;
  private ratingId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService
  ) {
    this.storeService.isLoading.set(true);
    this.ratingId = +this.activatedRoute.snapshot.params['id'];
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      projectName: new FormControl<string | null>(
        {
          value: this.ratingId ? 'Rating Project' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      yourReview: new FormControl<string | null>(
        {
          value: this.ratingId ? 'Rating Review' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      rating: new FormControl<string | null>({
        value: this.ratingId ? 'Rating Review' : '',
        disabled: false,
      }),
    });
  }

  public onClickSubmit() {
    this.router.navigate(['/ratings']);
  }
}
