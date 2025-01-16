// Angular modules
import { NgClass }             from '@angular/common';
import { NgIf }                from '@angular/common';
import { Component }           from '@angular/core';
import { FormGroup }           from '@angular/forms';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl }         from '@angular/forms';
import { Validators }          from '@angular/forms';
import { Router }              from '@angular/router';
import { RouterLink }          from '@angular/router';

// External modules
import { TranslateModule }     from '@ngx-translate/core';

// Internal modules
import { environment }         from '@env/environment';

// Services
import { AppService }          from '@services/app.service';
import { StoreService }        from '@services/store.service';

import { PageLayoutComponent }  from '@layouts/page-layout/page-layout.component';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector    : 'app-login',
  templateUrl : './project-detail.component.html',
  styleUrls   : ['./project-detail.component.scss'],
  standalone  : true,
  imports     : [PageLayoutComponent, MatTableModule, FormsModule, MatCheckboxModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule]
})
export class ProjectDetailComponent
{
  displayedColumns: string[] = ['description', 'createdBy', 'date', 'tradeApproval', 'customerApproval'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public appName : string = environment.appName;
  public formGroup !: FormGroup<{
    name    : FormControl<string | null>,
    id : FormControl<string | null>,
    type : FormControl<string | null>,
    status : FormControl<string | null>,
  }>;
  public isLogin = true;

  constructor
  (
    private router: Router,
  )
  {
    this.initFormGroup();
    this.isLogin = this.router.url === '/auth/login';
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup() : void
  {
    this.formGroup = new FormGroup({
      name      : new FormControl<string | null>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true }),
      id   : new FormControl<string | null>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true }),
      type      : new FormControl<string | null>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true }),
      status   : new FormControl<string | null>({
        value    : '',
        disabled : false
      })
    });
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit() : Promise<void>
  {
    await this.authenticate();
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async authenticate() : Promise<void>
  {
    // NOTE Redirect to home
    this.router.navigate(['/home']);
  }

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------
}

export interface PeriodicElement {
  description: any;
  createdBy: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Hydrogen', date: 'H'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Helium', date: 'He'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Lithium',date: 'Li'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Beryllium', date: 'Be'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Boron', date: 'B'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Carbon', date: 'C'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Nitrogen', date: 'N'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Oxygen', date: 'O'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', createdBy: 'Fluorine', date: 'F'},
];

