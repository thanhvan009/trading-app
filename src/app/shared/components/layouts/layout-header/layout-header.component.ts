import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    NgIf
  ],
})
export class LayoutHeaderComponent implements OnInit {
  public appName: string = environment.appName;
  public isMenuCollapsed: boolean = true;
  public breadcrumbText: string = '';

  constructor(private router: Router) {}

  public ngOnInit(): void {
    const pathName = this.router.url.split('/')[1].toString().split('?')[0];
    this.breadcrumbText = pathName.substring(0, pathName.length);
  }

  public async onClickLogout(): Promise<void> {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
