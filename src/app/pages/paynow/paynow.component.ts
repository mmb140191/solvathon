import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss']
})
export class PaynowComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  customerToken: any = '';
  payloadForPayment: any = {};
  error = false;
  paying = false;

  ngOnInit(): void {
    this.getCustomerToken();
  }


  getCustomerToken() {
    const token:any = localStorage.getItem('customerToken') || {};
    try {
      this.customerToken = JSON.parse(token);
    } catch {
      this.customerToken = '12345';
    }
    if (Object.keys(this.customerToken).length) {
      this.payloadForPayment = this.setPayloadForPayment();
    } else {
      this.router.navigate(['/registration']);
    }
  }

  retryPayment() {
    this.error = false;
  }

  setPayloadForPayment() {
    return {
      panToken: this.customerToken.panToken,
      publicToken: this.customerToken.publicToken,
      cvvToken: this.customerToken.cvvToken,
      amount: 100,
      merchantId: '12345678'
    }
  }

  postPayment() {
    this.paying = true;
    const url = 'http://localhost:8091/payment';
    this.http.post(url, this.payloadForPayment, {responseType: 'text'})
    .subscribe((response: any) => {
    
     
        this.router.navigate(['/paymentsuccess']);
      

    }, (error) => {
      this.paying = false;
      this.error = error.message || 'Something went wrong. <br> Press to try again';
    });
  }
}
