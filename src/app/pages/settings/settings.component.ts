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

// Internal modules
import { environment } from '@env/environment';

import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';

import { PaymentsComponent } from './components/payments/payments.component';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-setting',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    TranslateModule,
    MatTabsModule,
    PaymentsComponent,
  ],
})
export class SettingsComponent {
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    yourname: FormControl<string>;
    email: FormControl<string>;
    dateOfBirth: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    address: FormControl<string>;
  }>;

  constructor(private router: Router) {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      yourname: new FormControl<string>(
        {
          value: 'John',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      email: new FormControl<string>(
        {
          value: 'john@gmail.com',
          disabled: false,
        },
        {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }
      ),
      dateOfBirth: new FormControl<string>(
        {
          value: '31/12/1998',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      username: new FormControl<string>(
        {
          value: 'john1998',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      password: new FormControl<string>(
        {
          value: 'xxxxxx',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      address: new FormControl<string>(
        {
          value: '123 Street 1',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  public async onClickSubmit(): Promise<void> {
    this.router.navigate(['/home']);
  }
}
