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
    private router       : Router,
    private storeService : StoreService,
    private appService   : AppService,
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
  {description: 1, createdBy: 'Hydrogen', date: 'H'},
  {description: 2, createdBy: 'Helium', date: 'He'},
  {description: 3, createdBy: 'Lithium',date: 'Li'},
  {description: 4, createdBy: 'Beryllium', date: 'Be'},
  {description: 5, createdBy: 'Boron', date: 'B'},
  {description: 6, createdBy: 'Carbon', date: 'C'},
  {description: 7, createdBy: 'Nitrogen', date: 'N'},
  {description: 8, createdBy: 'Oxygen', date: 'O'},
  {description: 9, createdBy: 'Fluorine', date: 'F'},
];

