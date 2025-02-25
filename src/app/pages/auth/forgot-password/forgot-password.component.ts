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
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
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
export class ForgotPasswordComponent {
  public selectedTabIndex = 0;
  public isOTPCodeShowed = false;
  public formGroup!: FormGroup<{
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    otpCode: FormControl<number | null>;
  }>;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }
      ),
      phoneNumber: new FormControl<string>(
        {
          value: '',
          disabled: true,
        },
        {
          validators: [Validators.required],
          nonNullable: true,
        }
      ),
      otpCode: new FormControl<number | null>(
        {
          value: null,
          disabled: true,
        },
        {
          validators: [Validators.required],
          nonNullable: true,
        }
      ),
    });
  }

  
  onClickTab(index: number) {
    this.formGroup.reset();
    this.isOTPCodeShowed = false;
    this.selectedTabIndex = index;

    if (index == 0) {
      this.formGroup.get('phoneNumber')?.disable();
      this.formGroup.get('otpCode')?.disable();
      this.formGroup.get('email')?.enable();
    } else {
      this.formGroup.get('phoneNumber')?.enable();
      this.formGroup.get('otpCode')?.disable();
      this.formGroup.get('email')?.disable();
    }
  }

  public onGetOTP() {
    this.formGroup.get('phoneNumber')?.markAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    this.isOTPCodeShowed = true;
    this.formGroup.get('phoneNumber')?.disable();
    this.formGroup.get('otpCode')?.enable();
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    this.router.navigate(['/auth/login']);
  }
}
