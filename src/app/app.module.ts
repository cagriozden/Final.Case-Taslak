import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BayipageComponent } from './bayipage/bayipage.component';
import { AboutComponent } from './about/about.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { OrdernumberComponent } from './ordernumber/ordernumber.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { ContactComponent } from './contact/contact.component';
import { NewspageComponent } from './newspage/newspage.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
import { WaitingOrdersComponent } from './waiting-orders/waiting-orders.component';
import { DealeranalysisComponent } from './dealeranalysis/dealeranalysis.component';

@NgModule({
  declarations: [
    AppComponent,
    BayipageComponent,
    AboutComponent,
    PaymentPageComponent,
    OrdernumberComponent,
    AdminpageComponent,
    LoginComponent,
    ContactComponent,
    NewspageComponent,
    OrderHistoryComponent,
    ConfirmedOrdersComponent,
    StockstatusComponent,
    WaitingOrdersComponent,
    DealeranalysisComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
