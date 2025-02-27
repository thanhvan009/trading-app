import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { MatIconModule } from '@angular/material/icon';
import moment from 'moment';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { IDescription, mockDescriptionsData, mockProjectDetailData } from 'src/app/shared/mock-data/project.mock';
import { BreadcrumbService } from '@services/breadcrumb.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    TranslateModule,
    ProgressBarComponent,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule
  ],
})


export class ProjectDetailComponent {
  displayedColumns: string[] = [
    'description',
    'createdBy',
    'date',
    'tradeApproval',
    'customerApproval',
  ];
  dataSource: any = new MatTableDataSource<IDescription>(mockDescriptionsData);
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    name: FormControl<string | null>;
    id: FormControl<number | string>;
    type: FormControl<string | null>;
    status: FormControl<string | null>;
    startDate: FormControl<string | null>;
    endDate: FormControl<string | null>;
    payment: FormControl<string | null>;
    paymentAmount: FormControl<string | null>;
    warrantyStartDate: FormControl<string | null>;
    warrantyEndDate: FormControl<string | null>;
  }>;
  private projectId: number;
  public title = '';
  model: any = {};
  
  types: any[] = [
    {value: 'Shopping', viewValue: 'Shopping'},
    {value: 'Service', viewValue: 'Service'},
    {value: 'Transfer', viewValue: 'Transfer'},
  ];

  selectedFood = this.types[0].value;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService,
    private breadcrumbService: BreadcrumbService,
  ) {
    this.storeService.isLoading.set(true);
    this.projectId = +this.activatedRoute.snapshot.params['id'];
    if (this.projectId) {
      this.title = 'Edit - ' + mockProjectDetailData.name;
    } else {
      this.title = 'Create a new project';
    }
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string | null>(
        {
          value: this.model.name,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      id: new FormControl<number | string>(
        {
          value: this.model.id,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      type: new FormControl<string | null>(
        {
          value: this.model.type,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      status: new FormControl<string | null>(
        {
          value: this.model.status,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      startDate: new FormControl<string | null>(
        {
          value: this.model?.startDate,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      endDate: new FormControl<string | null>(
        {
          value: this.model?.endDate,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      payment: new FormControl<string | null>(
        {
          value: this.model?.payment,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      paymentAmount: new FormControl<string | null>(
        {
          value: this.model?.paymentAmount,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      warrantyStartDate: new FormControl<string | null>(
        {
          value: this.model?.warrantyStartDate,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      warrantyEndDate: new FormControl<string | null>(
        {
          value: this.model?.warrantyEndDate,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  changeStatus(e: any) {
    this.model.status = e.value;
    this.formGroup.controls.status.setValue(e.value)
  }

  changeType(e: any) {
    this.model.type = e.value;
    this.formGroup.controls.type.setValue(e.value)
  }

  public ngOnInit(): void {
    let data = null;
    if (this.projectId) {
      this.model = {
        ...mockProjectDetailData
      };
      data = [
        {
          label: 'Project Details',
        },
      ];
    } else {
      this.model = {
        id: '',
        name: '',
        type: null,
        owner: '',
        status: null,
        link: '',
      }
      data = [
        {
          label: 'New Project',
        },
      ];
    }
    this.breadcrumbService.updateBreadcrumb(data);
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
      this.initForm();
    }, 1000)
  }

  public ngAfterView(): void {
    // 
  }

  onCancel() {
    this.router.navigate(['/projects']);
  }

  onSave() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    this.router.navigate(['/projects']);
  }

  addRow() {
    let newRow = {
      description: '',
      createdBy: 'Admin',
      date: moment(new Date()).format('DD/MM/YYYY'),
      tradeApproval: true,
      customerApproval: false,
      editing: true
    };
    this.dataSource = new MatTableDataSource<IDescription>([
      ...this.dataSource.data,
      newRow
    ])
  }

  update(checked: boolean, index: any, type?: string) {
    if (type === 'tradeApproval') {
      this.dataSource.data[index] = {
        ...this.dataSource.data[index],
        tradeApproval: checked,
        customerApproval: !checked,
      }
    } else {
      this.dataSource.data[index] = {
        ...this.dataSource.data[index],
        tradeApproval: !checked,
        customerApproval: checked,
      }
    }
    this.dataSource = new MatTableDataSource<IDescription>([
      ...this.dataSource.data,
    ])
  }
}


