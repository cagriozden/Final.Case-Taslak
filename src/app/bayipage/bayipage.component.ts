import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

interface Product {
  id: number;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productInformation: string;
}

@Component({
  selector: 'app-bayipage',
  templateUrl: './bayipage.component.html',
  styleUrls: ['./bayipage.component.css']
})
export class BayipageComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = []; // Filtrelenmiş ürünleri tutacak dizi
  userId!: number;
  quantities: { [productId: number]: number } = {};
  searchTerm: string = ''; // Arama terimini tutacak değişken

  

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('https://localhost:44346/finalCase/Products').subscribe((data: any) => {
      this.products = data.response;
      this.filteredProducts = this.products; // Başlangıçta tüm ürünleri filtrelenmiş ürünler listesine atar
      this.quantities = {}; // Quantities objesini sıfırla

      // Initialize quantities object with default quantity of 0 for each product
      this.products.forEach(product => {
        this.quantities[product.id] = 0;
      });
    });
  }

  searchProducts() {
    // Arama terimine göre ürünleri filtrele
    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  

  openSweetAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ürün sepete eklendi',
      showConfirmButton: false,
      timer: 1200
    });
  }

  decreaseQuantity(productId: number) {
    if (this.quantities[productId] > 0) {
      this.quantities[productId]--;
    }
  }

  increaseQuantity(productId: number) {
    this.quantities[productId]++;
  }

  addToBasket(product: Product) {
    const request = {
      UserId: this.userId,
      ProductId: product.id,
      orderId: 0,
      BasketQuantity: this.quantities[product.id],
      BasketPrice: this.quantities[product.id] * product.productPrice,
      BasketStatus: true
    };

    this.http.post('https://localhost:44346/finalCase/Baskets', request).subscribe((data: any) => {
      this.openSweetAlert();
    });
  }
  onSearchClick() {
    this.searchProducts(); // Arama yap
  }
}
