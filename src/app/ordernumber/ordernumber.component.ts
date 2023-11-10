import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  id: number;
  userId: number;
  orderStatus: string;
  orderPaymentMethod: string;
  orderAmount: number;
  insertDate: string;
}

@Component({
  selector: 'app-ordernumber',
  templateUrl: './ordernumber.component.html',
  styleUrls: ['./ordernumber.component.css']
})
export class OrdernumberComponent implements OnInit {
  orders: Order[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getOrders(); // Component yüklendiğinde verileri çek
  }

  getOrders() {
    this.http.get<{ response: Order[] }>('https://localhost:44346/finalCase/Orders')
      .subscribe(response => {
        this.orders = response.response;
      });
  }
}
