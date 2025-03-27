import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { mockAdminUser } from 'src/app/shared/mock-data/users.mock';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
  ],
})
export class CallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(() => {
      const res = { ...mockAdminUser }
      localStorage.setItem('token', res.token);
      // localStorage.setItem('role', res.role);
      // localStorage.setItem('user', JSON.stringify(res));
      setTimeout(() => {
        // this.router.navigate(['/dashboard']);
        this.router.navigate(['/auth/role-selection']);
    }, 1000)
    });
  }
}