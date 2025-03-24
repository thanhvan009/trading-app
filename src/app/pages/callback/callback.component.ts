import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `<p>Loading...</p>`,
  standalone: true,
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const hash = window.location.hash;
    console.log('hash ', hash);
    if (hash) {
      const token = hash.split('=')[1].split('&')[0];
      console.log('token ', token);
      localStorage.setItem('auth_token', token);
      this.router.navigate(['/dashboard']);
    }
  }
}