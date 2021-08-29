import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './pages/registration/registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PinComponent } from './pages/pin/pin.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { SetupcompleteComponent } from './pages/setupcomplete/setupcomplete.component';
import { PaynowComponent } from './pages/paynow/paynow.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { MobileFormComponent } from './pages/mobile-form/mobile-form.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'pin', component: PinComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'setupcomplete', component: SetupcompleteComponent},
  { path: 'paynow', component: PaynowComponent },
  { path: 'paymentsuccess', component: PaymentsuccessComponent },
  { path: 'mobile-form', component: MobileFormComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
