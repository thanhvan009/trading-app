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
import {MatIconModule} from '@angular/material/icon';
import moment from 'moment';
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
    MatIconModule
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
  dataSource: any = new MatTableDataSource<IDescription>(descriptionMockData);
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    name: FormControl<string | null>;
    id: FormControl<number | string>;
    type: FormControl<string | null>;
    status: FormControl<string | null>;
  }>;
  private projectId: number;
  public title = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService
  ) {
    this.storeService.isLoading.set(true);
    this.projectId = +this.activatedRoute.snapshot.params['id'];
  }

  private initFormGroup(projectId?: number): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string | null>(
        {
          value: projectId ? 'Hydrogen' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      id: new FormControl<number | string>(
        {
          value: projectId ? projectId : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      type: new FormControl<string | null>(
        {
          value: projectId ? 'Shopping' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      status: new FormControl<string | null>(
        {
          value: projectId ? 'Active' : 'Pending',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
    if (this.projectId) {
      this.title = 'Edit - ' + this.formGroup.controls.name.value;
    }
  }

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
      this.initFormGroup(this.projectId);
    }, 2000);
  }

  public ngAfterView(): void {}

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
      description: 'Please enter new description...',
      createdBy: 'Admin',
      date: moment(new Date()).format('DD/MM/YYYY'),
      tradeApproval: true,
      customerApproval: false,
      editing: true
    };
    this.dataSource = new MatTableDataSource<IDescription>( [
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
    this.dataSource = new MatTableDataSource<IDescription>( [
      ...this.dataSource.data,
    ])
  }
}

export interface IDescription {
  description: any;
  createdBy: string;
  date: string;
  tradeApproval?: boolean;
  customerApproval?: boolean;
  editing?: boolean;
}

const descriptionMockData: IDescription[] = [
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Hydrogen',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Helium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Lithium',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Beryllium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Boron',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Carbon',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Nitrogen',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Oxygen',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Fluorine',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
];
