// Angular modules
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// Services
import { StoreService } from '@services/store.service';

// Components
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    PageLayoutComponent,
    NgIf,
    ProgressBarComponent,
    PageLayoutComponent,
    NgIf,
  ],
})
export class HomeComponent implements OnInit {
  constructor(public storeService: StoreService, private router: Router) {
    this.storeService.isLoading.set(true);
  }

  public ngOnInit(): void {
    setTimeout((_) => {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  onClick(label: string) {
    if (label == 'projects') {
      this.router.navigate(['/projects']);
    } else if (label == 'ratings') {
      this.router.navigate(['/ratings']);
    } else {
      return;
    }
  }
}
