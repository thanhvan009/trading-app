// Angular modules
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

// External modules
import { TranslateModule } from '@ngx-translate/core';

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
  ],
})
export class PaymentsComponent {
  public formGroup!: FormGroup<{
    cardType: FormControl<string>;
    nameOnCard: FormControl<string>;
    cardNumber: FormControl<string>;
    expirationDate: FormControl<string>;
  }>;

  constructor(private router: Router) {}

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit(): Promise<void> {
    //
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------
}
