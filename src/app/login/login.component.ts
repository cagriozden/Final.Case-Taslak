import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "userEmail": "",
    "userPassword": ""
  };

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  onLogin() {
    const baseUrl = 'https://localhost:44346/';
    
    // JSON verileri dizeye çevir
    const body = JSON.stringify(this.loginObj);

    // Headers oluştur ve JSON içeriğini ayarla
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(baseUrl + 'finalCase/Tokens', body, { headers: headers }).subscribe((res: any) => {
      
      if (res.success) {
        this.openSweetAlert('success', 'Giriş Başarılı'); // SweetAlert göster
        localStorage.setItem('loginToken', res.response.token);
        
        const tokenPayload = JSON.parse(atob(res.response.token.split('.')[1]));

        this.userService.setLoggedInUser(tokenPayload);


        const userRole = tokenPayload.UserRole;
        const userId = parseInt(tokenPayload.Id);

        if (userRole === 'Admin') {
          this.router.navigateByUrl(`/Adminpage/${userId}`);
        } else if (userRole === 'Dealer') {
          this.router.navigateByUrl(`/Bayipage/${userId}`);
        } 
      } else {
        this.openSweetAlert('error', 'Hatalı bilgi girişi'); // Hata durumunda SweetAlert göster
      }
    }, error => {
      console.error(error); // Hata durumlarını konsola yazdır
      this.openSweetAlert('error', 'Hatalı'); // Hata durumunda SweetAlert göster
    });
  }

  openSweetAlert(icon: any, title: string) {
    Swal.fire({
      icon: icon,
      title: title,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1300
    });
  }
}
