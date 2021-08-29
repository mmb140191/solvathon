import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-setupcomplete',
  templateUrl: './setupcomplete.component.html',
  styleUrls: ['./setupcomplete.component.scss']
})
export class SetupcompleteComponent implements OnInit {

  constructor(private router: Router) { }

  cardNo = '';

  ngOnInit(): void {
    this.getCardNo();
  }

  getCardNo() {
    const storedData: any = localStorage.getItem('customerToken') || {cardNo: ''};
    try {
      this.cardNo = JSON.parse(storedData.cardNo);
    } catch {
      this.cardNo = 'XXXX-XXXX-XXXX-1234';
    }
  }

  goToPage() {
    this.router.navigate(['/paynow']);
  }

}
