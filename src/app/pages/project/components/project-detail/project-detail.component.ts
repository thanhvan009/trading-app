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

import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatCheckboxModule } from '@angular/material/checkbox';

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
    id: FormControl<string | null>;
    type: FormControl<string | null>;
    status: FormControl<string | null>;
  }>;

  constructor(private router: Router) {
    this.initFormGroup();
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string | null>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      id: new FormControl<string | null>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      type: new FormControl<string | null>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      status: new FormControl<string | null>({
        value: '',
        disabled: false,
      }),
    });
  }

  onCancel() {
    this.router.navigate(['/projects']);

  }

  onSave() {
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
