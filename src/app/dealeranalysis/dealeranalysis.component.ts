import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dealeranalysis',
  templateUrl: './dealeranalysis.component.html',
  styleUrls: ['./dealeranalysis.component.css']
})
export class DealeranalysisComponent {
  Orders : any[] = [];
  completedOrders: any[] = [];
  userId!: number;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.loadOrders();
  }

  //Tüm ürünleri getirdim
  loadOrders() {
    this.http.get('https://localhost:44346/finalCase/Orders').subscribe((data: any) => {
       this.Orders = (data.response as any[]).filter((order: any) => order.orderStatus === 'Waiting'|| order.orderStatus === 'Completed'  ) ; //Tüm Siparişler
    });
  }



  
}