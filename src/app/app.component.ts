import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StoreService } from '@services/store.service';
import { ToastComponent } from '@blocks/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ToastComponent, NgIf]
})
export class AppComponent implements OnInit {
  constructor
    (
      public storeService: StoreService,
      private router: Router,
    ) {
  }

  public ngOnInit(): void {
    const currentUrl = location.pathname;
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/auth/login']);
      return;
    }

    if (!localStorage.getItem('role')) {
      this.router.navigate(['/auth/role-selection']);
      return;
    }

    if (!localStorage.getItem('user')) {
      this.router.navigate(['/auth/user-information']);
      return;
    }
  }
}
