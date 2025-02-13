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
  dataSource = new MatTableDataSource<IDescription>(descriptionMockData);
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
          value: projectId ? '1.0079' : '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      status: new FormControl<string | null>(
        {
          value: projectId ? 'Active' : 'Not started yet',
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
}

export interface IDescription {
  description: any;
  createdBy: string;
  date: string;
}

const descriptionMockData: IDescription[] = [
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Hydrogen',
    date: 'H',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Helium',
    date: 'He',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Lithium',
    date: 'Li',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Beryllium',
    date: 'Be',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Boron',
    date: 'B',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Carbon',
    date: 'C',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Nitrogen',
    date: 'N',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Oxygen',
    date: 'O',
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Fluorine',
    date: 'F',
  },
];
