// Angular modules
import { NgClass, NgFor } from '@angular/common';
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
import { MatIconModule } from '@angular/material/icon';

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
    yourReview: FormControl<string | null>;
    projectName: FormControl<string | null>;
    ratingNumber: FormControl<number | null>;
  }>;
  private ratingId: number;
  model: any = {};

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
          value: this.ratingId ? 'Test Case Project' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      yourReview: new FormControl<string | null>(
        {
          value: this.ratingId ? `It's so good, suggest to use` : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      ratingNumber: new FormControl<number | null>({
        value: this.ratingId ? 4 : 0,
        disabled: false,
      }),
    });
    if (this.ratingId) {
      this.selectedIndex = this.formGroup.controls.ratingNumber.value ?? 0;
    }
  }

  onClickStar(index: number) {
    this.selectedIndex = index;
  }

  public onCancel() {
    this.router.navigate(['/ratings']);
  }
  public onClickSubmit() {
    this.router.navigate(['/ratings']);
  }
}
