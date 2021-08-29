import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PinComponent } from './pages/pin/pin.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { SetupcompleteComponent } from './pages/setupcomplete/setupcomplete.component';
import { PaynowComponent } from './pages/paynow/paynow.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { MobileFormComponent } from './pages/mobile-form/mobile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    PinComponent,
    InstructionsComponent,
    SetupcompleteComponent,
    PaynowComponent,
    PaymentsuccessComponent,
    MobileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
