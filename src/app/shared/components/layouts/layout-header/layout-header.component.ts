import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgClass, NgIf } from '@angular/common';
import { BreadcrumbService } from '@services/breadcrumb.service';
import { get } from 'lodash';
@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    NgbCollapse,
    RouterLinkActive,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    TranslateModule,
    MatSlideToggleModule,
    NgClass,
    NgIf,
  ],
})
export class LayoutHeaderComponent implements OnInit {
  public appName: string = environment.appName;
  public isMenuCollapsed: boolean = true;
  public breadcrumbText: string = '';
  public breadcrumbData: any = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  public ngOnInit(): void {
    const initData = get(this.activatedRoute?.routeConfig?.data, 'breadcrumb');

    if (initData?.length) {
      this.breadcrumbService.newBreadCrumbs.next(initData);
    }
    this.breadcrumbService.newBreadCrumbs.subscribe((data: any) => {
      if (data?.length) {
        this.breadcrumbData = data;
      }
    });
  }

  public async onClickLogout(): Promise<void> {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
