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
import { ToastManager } from '@blocks/toast/toast.manager';
import { TranslateModule } from '@ngx-translate/core';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
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
export class UserInformation {
  public formGroup!: FormGroup<{
    licenseNumber: FormControl<string>;
    yourname: FormControl<string>;
    email: FormControl<string>;
    dateOfBirth: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    address: FormControl<string>;
    yearOfExperience: FormControl<string>;
    typeOfService: FormControl<string>;
    workPerimeter: FormControl<string>;
  }>;
  model: any = {};
  public user: any = {};
  public role: string = '';
  public title: string = '';
  public subtitle: string = '';

  constructor(
    private router: Router,
    private storeService: StoreService,
    private toastManager: ToastManager
  ) {}

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
          value: this.model?.email,
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
          value: this.model?.password,
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
      yearOfExperience: new FormControl<string>(
        {
          value: '',
          disabled: this.role == 'Customer',
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      typeOfService: new FormControl<string>(
        {
          value: '',
          disabled: this.role == 'Customer',
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      workPerimeter: new FormControl<string>(
        {
          value: '',
          disabled: this.role == 'Customer',
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('role') ?? '';
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') ?? '')
      : {};
    this.model = {
      ...this.user,
    };
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
    this.toastManager.quickShow(
      'User information was saved successfully',
      'success',
      true
    );
    this.router.navigate(['/dashboard']);
  }

  onBack() {
    this.router.navigate(['/auth/role-selection']);
  }
}
