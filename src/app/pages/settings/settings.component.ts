// Angular modules
import { formatDate, NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

// External modules
import { TranslateModule } from '@ngx-translate/core';

// Internal modules
import { environment } from '@env/environment';

import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';

import { PaymentsComponent } from './components/payments/payments.component';

import { MatTabsModule } from '@angular/material/tabs';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { ToastManager } from '@blocks/toast/toast.manager';

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
    ProgressBarComponent,
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
  public model: any = {};
  public role: string = '';
  public selectedIndex = 0;

  constructor(
    public storeService: StoreService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public toastManager: ToastManager,
  ) {
    this.storeService.isLoading.set(true);
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      yourname: new FormControl<string>(
        {
          value: this.model.yourname,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      email: new FormControl<string>(
        {
          value: this.model.email,
          disabled: false,
        },
        {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }
      ),
      dateOfBirth: new FormControl<any>(
        {
          value: formatDate(this.model.dateOfBirth ?? null, 'yyyy-MM-dd', 'en'),
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      username: new FormControl<string>(
        {
          value: this.model.username,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      password: new FormControl<string>(
        {
          value: this.model.password,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      address: new FormControl<string>(
        {
          value: this.model.address,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000)
    this.role = localStorage.getItem('role') ?? '';
    this.model = JSON.parse(localStorage.getItem('user') ?? '');
    
  }

  onClickTab(index: number) {
    this.selectedIndex = index;
  }

  ngAfterViewInit() {
    this.initForm();
    this.selectedIndex = this.activatedRoute.snapshot.queryParams['tab'] || 0;
  }

  public onClickSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    this.storeService.isLoading.set(true);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 1000)
    this.toastManager.quickShow(
      'Setting was saved successfully',
      'success',
      true
    );
    this.router.navigateByUrl('/settings?tab=0');
  }
}
