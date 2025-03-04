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
import { environment } from '@env/environment';
import { MOCK_TOKEN, mockAdminUser } from 'src/app/shared/mock-data/users.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent {
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    phoneNumber: FormControl<string>;
    otpCode: FormControl<number | null>;
  }>;
  public isLoginScreen = true;
  public selectedTabIndex = 0;
  public isOTPCodeShowed = false;

  constructor(
    private router: Router
  ) {
    this.isLoginScreen = this.router.url === '/auth/login';
    if (localStorage.getItem('token') && localStorage.getItem('role')) {
      this.router.navigate(['/dashboard']);
    }
  }

  private initForm(): void {
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
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      phoneNumber: new FormControl<string>(
        {
          value: '',
          disabled: true,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      otpCode: new FormControl<number | null>(
        {
          value: null,
          disabled: true,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  public ngOnInit() {
    this.initForm();
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    const user = {
      email: this.formGroup.get('email')?.value,
      password: this.formGroup.get('password')?.value,
      role: '',
    };

    localStorage.setItem('token', MOCK_TOKEN);
    if (this.formGroup.get('email')?.value === 'master@gmail.com') {
      localStorage.setItem('role', mockAdminUser.role);
      localStorage.setItem('user', JSON.stringify(mockAdminUser));
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/auth/role-selection']);
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

  onClickTab(index: number) {
    this.formGroup.reset();
    this.isOTPCodeShowed = false;
    this.selectedTabIndex = index;

    if (index == 0) {
      this.formGroup.get('phoneNumber')?.disable();
      this.formGroup.get('otpCode')?.disable();
      this.formGroup.get('email')?.enable();
      this.formGroup.get('password')?.enable();
    } else {
      this.formGroup.get('phoneNumber')?.enable();
      this.formGroup.get('otpCode')?.disable();
      this.formGroup.get('email')?.disable();
      this.formGroup.get('password')?.disable();
    }
  }
}
