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

// Services
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './customer-infomation.component.html',
  styleUrls: ['./customer-infomation.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule]
})
export class CustomerInfomationComponent {
  public appName: string = environment.appName;
  public formGroup !: FormGroup<{
    yourname: FormControl<string>,
    email: FormControl<string>,
    dateOfBirth: FormControl<string>,
    username: FormControl<string>,
    password: FormControl<string>,
    address: FormControl<string>,
  }>;

  constructor
    (
      private router: Router,
      private storeService: StoreService,
    ) {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      yourname: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true }),
      email: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required, Validators.email], nonNullable: true }),
      dateOfBirth: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true }),
      username: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true }),
      password: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true }),
      address: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true })
    });
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    localStorage.setItem('role', 'Role Name');
    this.storeService.isLoading.set(true);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 2000);
    this.router.navigate(['/home']);
  }

}
