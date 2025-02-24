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
  }>;
  public isLoginScreen = true;

  constructor(
    private router: Router
  ) {
    this.initFormGroup();
    this.isLoginScreen = this.router.url === '/auth/login';
    if (localStorage.getItem('token') && localStorage.getItem('role')) {
      this.router.navigate(['/dashboard']);
    }
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
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    localStorage.setItem('token', MOCK_TOKEN);
    localStorage.setItem('role', mockAdminUser.role);
    localStorage.setItem('user', JSON.stringify(mockAdminUser));
    this.router.navigate(['/dashboard']);
  }
}
