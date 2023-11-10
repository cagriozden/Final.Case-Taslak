# BayiSepeti Projesi

BayiSepeti, bayilerin dinamik bir şekilde stoktaki ürünleri görüntüleyebildiği, sipariş verebildiği ve bu siparişlerin admin onayını beklediği bir Angular projesidir. Proje, code-first yaklaşımıyla geliştirilmiş olup, veritabanı olarak MSSQL kullanılmıştır.

![Resim 1](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/f50b5311-a089-49c4-abb4-7adce0f4af44)


| Tüm Siparişler | Bayi Siparişleri Onaylama ve İptal Etme | Onaylanan Siparişler | Stok Durumu | Bayi Analizi |
| :-------------: | :-----------------------------------: | :------------------: | :---------: | :-----------: |
| ![Resim 2](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/06728e10-35ae-4ba8-96b5-057aee09ee07) | ![Resim 3](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/34b1df23-af2d-4f55-a145-f494b500713c) | ![Resim 4](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/eec724b1-8dac-479b-84db-01648e79fedb) | ![Resim 5](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/1750fb74-faeb-48b7-a57d-0946f5a5294b) | ![Resim 6](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/63b65e8f-58ad-423b-9add-f675fb56e951) |

- *Bayi Girişi:* Bayiler oluşturulan bir login ekranı üzerinden sisteme giriş yaparlar.
- *Admin Girişi:* Proje içinde admin yetkilisi için özel bir giriş ekranı bulunmaktadır.
- *Ürün Siparişi:* Bayiler, stoktaki ürünler arasından dinamik olarak adet seçerek ürün siparişi verebilirler.
- *Fiyatlandırma:* Sipariş verilen ürünlerin fiyatlandırması, seçilen adetle çarpılarak hesaplanır.
- *Ödeme İşlemi:* Bayiler, sepetlerindeki ürünleri ödeme ekranında ödeyebilirler.
- *Admin Onayı:* Ödeme işlemi gerçekleştikten sonra siparişler admin onayını bekler. Admin, onaylamadan önce bayiler siparişlerini iptal edebilirler.
- *Sipariş İptali:* Admin, onaylamadan önce bayilerin siparişlerini iptal edebilir.
- *Sipariş Takibi:* Bayiler, aktif ve eski siparişlerini görüntüleyebilirler.

## Admin Paneli

- *Sipariş Yönetimi:* Admin, bayiler tarafından oluşturulan siparişleri inceleyebilir, onaylayabilir veya iptal edebilir.
- *Stok Güncelleme:* Admin, ürün stoklarını güncelleyebilir.
- *Sipariş İnceleme:* Admin, bekleyen ve onaylanan siparişleri detaylı bir şekilde inceleyebilir.
- *İletişim:* Admin, bayilere mail atabilir.

| Duyuru Gönder | Anasayfa | Bilmek İstedikleriniz | İletişim |
| :------------: | :------: | :--------------------: | :---------: |
| ![Resim 7](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/74bd2d29-e0d5-4da2-b944-6b559c6999ec) | ![Resim 8](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/f08c6af1-e078-4b09-9882-7d6a83ba5207) | ![Resim 9](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/2eda3a66-038c-4529-a164-003828057f94) | ![Resim 10](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/5ae0d66a-2a25-41c7-b67f-cabb724abf73) |

| Onaylanan ve Bekleyen Siparişler | Bayi Sepeti Pay |Bayi Sepeti Makbuz | Red | Onay |
| :------------: | :-----------------------------: | :--------------: | :-----------------: | :--: |
| ![Resim 11](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/029224ee-b84b-4730-a2e4-2806bc83ddba) | ![Resim 12](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/c9a2c436-85f4-45e0-bc97-eba5057309b7) | ![Resim 13](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/319c6b22-0eac-4f1f-b7c8-069528aec524) | ![Resim 14](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/f6d9e49f-12a3-4105-8521-ef72c12854ed) | ![Resim_15](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/011db60d-c649-4ae7-945e-aaba9a35c0bc) |
