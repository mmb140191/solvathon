import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  token = '';
  ngOnInit(): void {
    this.token = localStorage.getItem('customerToken') || '';
  }

  goToPage() {
    if (this.token) {
      this.router.navigate(['/setupcomplete']);
    } else {
      this.router.navigate(['/registration']);
    }
  }

}
