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
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './customer-infomation.component.html',
  styleUrls: ['./customer-infomation.component.scss'],
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
export class CustomerInfomationComponent {
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    licenseNumber: FormControl<string>;
    yourname: FormControl<string>;
    email: FormControl<string>;
    dateOfBirth: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    address: FormControl<string>;
  }>;
  public role: string = '';
  public title: string = '';
  public subtitle: string = '';

  constructor(private router: Router, private storeService: StoreService) {}

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      licenseNumber: new FormControl<string>(
        {
          value: '',
          disabled: this.role == 'Customer',
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      yourname: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
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
      dateOfBirth: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      username: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      address: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('role') ?? '';
    this.title = this.role + ' Information';
    this.subtitle = this.role + ' Profile';

    this.initFormGroup();
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    this.storeService.isLoading.set(true);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000);
    const user = {
      role: this.role,
      ...this.formGroup.getRawValue(),
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/dashboard']);
  }

  onBack() {
    this.router.navigate(['/auth/role-selection']);
  }
}
