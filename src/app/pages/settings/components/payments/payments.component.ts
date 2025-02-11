import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    ProgressBarComponent
  ],
})
export class PaymentsComponent {
  public formGroup!: FormGroup<{
    cardType: FormControl<string>;
    nameOnCard: FormControl<string>;
    cardNumber: FormControl<string>;
    expirationDate: FormControl<string>;
  }>;

  constructor(private router: Router, public storeService: StoreService) {
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

  public async onClickSubmit(): Promise<void> {
    this.storeService.isLoading.set(true);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 2000);
    this.router.navigate(['/settings']);
  }
}
