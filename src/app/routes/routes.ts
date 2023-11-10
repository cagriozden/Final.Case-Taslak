import { Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { AdminpageComponent } from "../adminpage/adminpage.component";
import { BayipageComponent} from "../bayipage/bayipage.component";
import { PaymentPageComponent} from "../payment-page/payment-page.component";
import { OrdernumberComponent} from "../ordernumber/ordernumber.component";
import { LoginComponent} from "../login/login.component";
import { ContactComponent} from "../contact/contact.component";
import { NewspageComponent} from "../newspage/newspage.component";
import { OrderHistoryComponent} from "../order-history/order-history.component";
import {ConfirmedOrdersComponent } from "../confirmed-orders/confirmed-orders.component";
import {StockstatusComponent } from "../stockstatus/stockstatus.component";
import { WaitingOrdersComponent} from "../waiting-orders/waiting-orders.component";
import { DealeranalysisComponent} from "../dealeranalysis/dealeranalysis.component";



export const routes: Routes = [

    { path: '', component: LoginComponent },
    {path:"About", component:AboutComponent},
    {path:"Adminpage/:userId", component:AdminpageComponent},
    {path:"Bayipage/:userId", component:BayipageComponent},
    {path:"Paymentpage", component:PaymentPageComponent},
    {path:"Ordernumber", component:OrdernumberComponent},
    {path:"Login", component:LoginComponent},
    {path:"Contact", component:ContactComponent},
    {path:"Newspage", component:NewspageComponent},
    {path:"OrderHistory", component:OrderHistoryComponent},
    {path:"ConfirmedOrders", component:ConfirmedOrdersComponent},
    {path:"StockStatus", component:StockstatusComponent},
    {path:"WaitingOrders", component:WaitingOrdersComponent},
    {path:"DealerAnalysis", component:DealeranalysisComponent},
    
];