import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmed-orders',
  templateUrl: './confirmed-orders.component.html',
  styleUrls: ['./confirmed-orders.component.css']
})
export class ConfirmedOrdersComponent {
  waitingOrders: any[] = [];
  completedOrders: any[] = [];
  totalOrderAmount: number = 0;


  searchText: string = ''; // Arama işlevselliği için searchText değişkeni
  originalOrders: any[] = [];

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get('https://localhost:44346/finalCase/Orders').subscribe((data: any) => {
      this.originalOrders = data.response;
      this.waitingOrders = this.originalOrders.filter((order: any) => order.orderStatus === 'Waiting');
      this.completedOrders = this.originalOrders.filter((order: any) => order.orderStatus === 'Completed');
  
      this.filterOrders(); // Yükledikten sonra siparişleri filtreleme işlemi
  
      this.calculateTotalOrderAmount();
    });
  }

  
  filterOrders() {
    // Orijinal sipariş verilerinin bir kopyasını al
    const originalOrdersCopy = [...this.originalOrders];

    if (this.searchText) {
      // Eğer searchText dolu ise, siparişleri BayiID'ye göre filtrele
      this.waitingOrders = originalOrdersCopy.filter((order: any) => 
        order.userId.toString().includes(this.searchText)
      );
    } else {
      // Eğer searchText boş ise, orijinal siparişleri göster
      this.waitingOrders = [...this.originalOrders];
    }
  }

  calculateTotalOrderAmount() {
    this.totalOrderAmount = this.completedOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
    this.totalOrderAmount += this.waitingOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
  }
}
