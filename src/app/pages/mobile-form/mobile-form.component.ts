import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.scss']
})
export class MobileFormComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  model = {
    cardNo: '',
    expiryMonth: '',
    expiryYear: '',
    mobileNo: '',
    cardCvv: ''
  };
  loading = false;
  error = false;

  sendToken() {
    this.error = false;
    this.loading = true;
    const payload = {
      cardNo: this.model.cardNo,
      expiryMonth: this.model.expiryMonth,
      expiryYear: this.model.expiryYear,
      mobileNumber: this.model.mobileNo.toString(),
      cardCvv: this.model.cardCvv
    };
    const url = 'http://localhost:8091/registrationFlow';
    this.http.post(url, payload)
      .subscribe((response: any) => {
        const customerToken = {
          panToken: response.panToken,
          publicToken: response.publicToken,
          cvvToken: response.cvvToken,
          cardNo: response.cardNo
        }
        localStorage.setItem('customerToken', JSON.stringify(customerToken));
        this.router.navigate(['/setupcomplete']);
      }, (error) => {
        this.loading = false;
        this.error = error.message || 'Something went wrong';
      });
  }

}
