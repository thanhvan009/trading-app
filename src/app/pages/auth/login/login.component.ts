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
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

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
  public isLogin = true;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private appService: AppService
  ) {
    this.initFormGroup();
    this.isLogin = this.router.url === '/auth/login';
    if (localStorage.getItem('token') && localStorage.getItem('role')) {
      this.router.navigate(['/home']);
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

  public async onClickSubmit(): Promise<void> {
    await this.authenticate();
  }

  private async authenticate(): Promise<void> {
    this.storeService.isLoading.set(true);

    const email = this.formGroup.controls.email.getRawValue();
    const password = this.formGroup.controls.password.getRawValue();
    const success = await this.appService.authenticate(email, password);

    this.storeService.isLoading.set(false);

    if (!success) return;
    localStorage.setItem('token', 'Mock Token');
    this.router.navigate(['/auth/customer-infomation']);
  }
}
