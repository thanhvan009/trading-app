// Angular modules
import { NgClass }             from '@angular/common';
import { NgIf }                from '@angular/common';
import { Component, Input }           from '@angular/core';
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

import { PageLayoutComponent }  from '@layouts/page-layout/page-layout.component';


@Component({
  selector    : 'app-rating-detail',
  templateUrl : './rating-detail.component.html',
  styleUrls   : ['./rating-detail.component.scss'],
  standalone  : true,
  imports     : [PageLayoutComponent, FormsModule, ReactiveFormsModule, NgClass, NgIf, TranslateModule]
})
export class RatingDetailComponent
{
  displayedColumns: string[] = ['description', 'createdBy', 'date', 'tradeApproval', 'customerApproval'];
  public appName : string = environment.appName;
  public formGroup !: FormGroup<{
    yourReview    : FormControl<string | null>,
    projectName : FormControl<string | null>,
    rating : FormControl<string | null>,
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
      projectName      : new FormControl<string | null>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true }),
      yourReview   : new FormControl<string | null>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true }),
      rating      : new FormControl<string | null>({
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
