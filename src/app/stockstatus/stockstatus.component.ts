import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnInit {
  waitingOrders: any[] = [];
  newQuantity: number=0;
  totalOrderAmount: number = 0;
  completedOrders: number = 0;
  selectedProduct: any;
  newStock: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get('https://localhost:44346/finalCase/Products').subscribe((data: any) => {
      this.waitingOrders = data.response.map((product: any) => {
        return {
          productId: product.id,
          productName: product.productName,
          productInformation: product.productInformation,
          productQuantity: product.productQuantity,
          newQuantity: 0
        };
      });


      this.calculateTotalOrderAmount();
    });
  }



  calculateTotalOrderAmount() {
    // this.totalOrderAmount = this.completedOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
    this.totalOrderAmount += this.waitingOrders.reduce((total: number, order: any) => total + order.orderAmount, 0);
  }

  updateProductQuantity(product: any) {
    if (product.newQuantity >= 1) {
        const updatedProduct = {
            id: product.productId,
            productName: product.productName,
            productImage: "image.jpg",
            productQuantity: product.newQuantity, // Yeni stok miktarını buradan alıyoruz
            productPrice: product.productPrice,
            productInformation: product.productInformation
        };

        this.http.put<any>('https://localhost:44346/finalCase/Products/' + product.productId, updatedProduct)
            .subscribe(data => {
                product.productQuantity = product.newQuantity; // Ürünün stok miktarını güncelliyoruz
                // Güncelleme işlemi tamamlandıktan sonra verileri tekrar yükleme işlemi burada yapılabilir
            });
    } else {
        alert('Stok adedi 1 den küçük olamaz.');
    }
}





  onSubmit(event: Event): void {
    event.preventDefault(); // Formun sayfa yenilenmesini engelle

  }
}
