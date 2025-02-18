import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'setting-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    TranslateModule,
    ProgressBarComponent,
  ],
})
export class PaymentsComponent {
  public formGroup!: FormGroup<{
    cardType: FormControl<string>;
    nameOnCard: FormControl<string>;
    cardNumber: FormControl<string>;
    expirationDate: FormControl<string>;
  }>;
  public selectedIndex = 1;

  constructor(private router: Router, public storeService: StoreService, private activatedRoute: ActivatedRoute) {
    this.formGroup = new FormGroup({
      cardType: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        {
          validators: [Validators.required],
          nonNullable: true,
        }
      ),
      nameOnCard: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      cardNumber: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      expirationDate: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  ngAfterViewInit() {
    this.selectedIndex = this.activatedRoute.snapshot.queryParams['tab'] || 1;
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    this.storeService.isLoading.set(true);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000)
    this.router.navigateByUrl('/settings?tab=1');
  }
}
