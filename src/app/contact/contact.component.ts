import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 // input değerlerini tutacak değişkenler
 name!: string;
 email!: string;
 phone!: string;
 description!: string;

 // http servisini kullanmak için constructor içinde tanımlıyoruz
 constructor(private http: HttpClient) {}

 // gönder butonuna basıldığında çalışacak fonksiyon
 sendMail() {
   // post işlemi için gönderilecek veriyi bir obje olarak oluşturuyoruz
   const data = {
     name: this.name,
     email: this.email,
     phone: this.phone,
     description: this.description
   };

   // http servisi ile post işlemini gerçekleştiriyoruz
   this.http.post('https://localhost:44346/finalCase/Mails', data).subscribe(
     // başarılı olursa bir mesaj gösteriyoruz
     (response) => {
      Swal.fire('Başarılı!', 'Mail başarıyla gönderildi.', 'success');
     },
     // hata olursa bir mesaj gösteriyoruz
     (error) => {
      Swal.fire('Hata!', 'Mail gönderilirken bir hata oluştu.', 'error');
     }
   );
 }
}
