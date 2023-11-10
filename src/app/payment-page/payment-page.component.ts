
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {

  ngOnInit(): void {


    const loggedInUser = this.userService.getLoggedInUser();
      this.loggedInUserId = loggedInUser.Id;

    this.loadBaskets();
  }

  constructor(private http: HttpClient, private userService: UserService) { }
  products: any[] = [];
  loggedInUserId!: number; // giriş yapmış kullanıcıyı tutar
  baskets: any[] = [];
  insertDate: string = this.getCurrentDate();
  selectedPaymentMethod: string = '';



   //Sepeti Getir
   loadBaskets() {

    let Id = this.loggedInUserId;
    Id = Number(Id);
    console.log(Id)


    this.http.get(`https://localhost:44346/finalCase/Baskets?userId=${this.loggedInUserId}`).subscribe((data: any) => {
      this.baskets = data.response.filter((item: any) =>item.basketStatus == true && item.userId === Id )
  
      this.baskets.forEach(basket => {
        this.getProductNameById(basket.productId, basket);
      });
    });
  }
  

  //Total Fiyat
  getTotalPrice(): number {
    return this.baskets.reduce((acc, curr) => acc + curr.basketPrice, 0);
  }

 //Şuanki tarihi getir
 getCurrentDate(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const hours = ('0' + currentDate.getHours()).slice(-2);
  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
  const seconds = ('0' + currentDate.getSeconds()).slice(-2);

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

 // Ödeme Yöntemini seçme
onPaymentMethodChange(paymentMethod: string): void {
  this.selectedPaymentMethod = paymentMethod;
}


   // Product Id üzerinde Product name'i getirme (Fk değerinden normal değeri bulma)
   getProductNameById(productId: number, basket: any) {
    this.http.get(`https://localhost:44346/finalCase/Products/${productId}`).subscribe((data: any) => {
      if (basket) {
        basket.productName = data.response.productName;
      }
    });
  }
  

  openSweetAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ödeme başarılı',
      showConfirmButton: false,
      timer: 1000
    });
  }


   //Ödemeyi gerçekleştir- Ödeme tablosuna yeni kayıt oluşturur.
   makePayment() {

    let Id = this.loggedInUserId;
    Id = Number(Id); //Idyi numaraya çevirdi

    const orderData = {
      userId: Id, // Örnek olarak user id 2 seçildi
      orderStatus: 'Waiting',
      orderPaymentMethod: this.selectedPaymentMethod,
      orderAmount: this.getTotalPrice(),
      insertDate: this.getCurrentDate()
    
    };
  
    this.http.post('https://localhost:44346/finalCase/Orders', orderData).subscribe(
      (response) => {
        console.log('Ödeme başarıyla tamamlandı. Sipariş oluşturuldu.', response);
      

        this.baskets.forEach(basket => {
          this.updateBasketStatus(basket.id);

          this.updateProductStock(basket.productId, basket.basketQuantity);

        });

      },
      (error) => {
        console.error('Ödeme sırasında bir hata oluştu', error);
      }
    );

    // this.openSweetAlert()

  }


//Ürün stoğunu güncelleme
  updateProductStock(basketId: number, quantity: number) {
    this.http.get(`https://localhost:44346/finalCase/Products/${basketId}`).subscribe((data: any) => {
      const basket = data.response;
  
      if (basket) {
        basket.productQuantity -= quantity;
  
        // Güncellenen stok bilgisini API'ye gönderme
        this.http.put(`https://localhost:44346/finalCase/Products/${basketId}`, basket).subscribe();
      }
    });
  }


 //Alışverişi tamamlanmış durumunu false yapma
  updateBasketStatus(basketId: number) {
    const updatedBasket = {
      basketStatus: false
    };
  
    this.http.put(`https://localhost:44346/finalCase/Baskets/${basketId}`, updatedBasket).subscribe(
      (response) => {

        this.baskets = this.baskets.filter(basket => basket.id !== basketId);
      }
    );
  }
  


}
