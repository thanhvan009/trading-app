import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-idp',
    templateUrl: './IdP.component.html',
    styleUrls: ['./IdP.component.scss'],
    standalone: true,
    imports: [
        MatProgressSpinnerModule,
      ],
})
export class IdPComponent implements OnInit {
    constructor(
    ) { }

    ngOnInit() {
        setTimeout(() => {
            // Verifing in a central IdP (Auth0/Okta).
            // After successful login, the identity provider redirects to:
            window.location.href = 'http://localhost:4200/callback'
        }, 1000)

    }
}