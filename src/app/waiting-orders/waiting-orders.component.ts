import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-waiting-orders',
  templateUrl: './waiting-orders.component.html',
  styleUrls: ['./waiting-orders.component.css']
})
export class WaitingOrdersComponent {
  waitingOrders: any[] = [];
  completedOrders: any[] = [];
  totalOrderAmount: number = 0;
  aramaBayiID: string = ''; // Arama yapılacak BayiID değeri
  aramaSonuclari: any[] = []; // Arama sonuçlarını saklamak için dizi

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get('https://localhost:44346/finalCase/Orders').subscribe((data: any) => {
      this.waitingOrders = (data.response as any[]).filter((order: any) => order.orderStatus === 'Waiting');
      this.completedOrders = (data.response as any[]).filter((order: any) => order.orderStatus === 'Completed');

      this.calculateTotalOrderAmount();
    });
  }

  calculateTotalOrderAmount() {
    this.totalOrderAmount = this.completedOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
    this.totalOrderAmount += this.waitingOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
  }

  //Bayinin siparişi iptal etmesi
  deleteOrder(order: any) { //fonksiyon adı değiştir
    this.http.delete(`https://localhost:44346/finalCase/Orders/${order.id}`)
      .subscribe(() => {
        this.loadOrders(); // Siparişi sildikten sonra verileri yeniden yükle
      });
  }

  //Bayinin sipariş durumunu onaylaması
  updateOrder(order: any) {
    const updatedOrder = {
      id: order.id,
      orderStatus: 'Completed',
      orderPaymentMethod: order.orderPaymentMethod,
      orderAmount: order.orderAmount
    };
  
    this.http.put(`https://localhost:44346/finalCase/Orders/${order.id}`, updatedOrder).subscribe((data: any) => {
      order.orderStatus = 'Completed'; // Sipariş durumunu güncelle
      this.loadOrders(); // Siparişi güncelledikten sonra verileri yeniden yükle
    });
  }


  
}
