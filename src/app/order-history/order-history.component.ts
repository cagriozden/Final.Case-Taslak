import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  waitingOrders: any[] = [];
  completedOrders: any[] = [];
  userId: number | undefined;
  Orders : any[] = [];
  loggedInUserId!: number; // giriş yapmış kullanıcıyı tutar



  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const loggedInUser = this.userService.getLoggedInUser();
    this.loggedInUserId = loggedInUser.Id;
    
      
        this.loadOrders();
      
    
  }

  // loadOrders() {
  //   this.http.get(`https://localhost:44346/finalCase/Orders/${this.userId}`).subscribe((data: any) => {
  //     this.waitingOrders = (data.response as any[]).filter((order: any) => order.orderStatus === 'Waiting');
  //     this.completedOrders = (data.response as any[]).filter((order: any) => order.orderStatus === 'Completed');
  //     console.log(this.waitingOrders);
  //   });
  // }


  loadOrders() {
    
    let Id = this.loggedInUserId;
    Id = Number(Id);
    
    this.http.get('https://localhost:44346/finalCase/Orders').subscribe((data: any) => {
       this.Orders = (data.response as any[]).filter((item: any) => item.userId === Id  ) ; //Tüm Siparişler
    });
  }

  deleteOrder(order: any) {
    this.http.delete(`https://localhost:44346/finalCase/Orders/${order.id}`).subscribe(() => {
      this.loadOrders(); // Siparişi sildikten sonra verileri yeniden yükle
    });

  }
  
}
