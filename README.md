# BayiSepeti Projesi

BayiSepeti, bayilerin dinamik bir şekilde stoktaki ürünleri görüntüleyebildiği, sipariş verebildiği ve bu siparişlerin admin onayını beklediği bir B2B" (Business to Business) projedir. Proje, code-first yaklaşımıyla geliştirilmiş olup, veritabanı olarak MSSQL kullanılmıştır. Bayilerin toptan ürün alması için tasarlanmış bir web sitesidir. Bayilerin bekleyen siparişlerini görüntülülediği ve siparişlerini iptal edebildiği web sitesi sahibi ile mail aracaılığıyla iletişime geçebildiği aynı zamanda ürünleri detaylıca inceleyebildiği bir mimari hazırlanmıştır. Yazılım içerisinde backend ve frontend alanlarının iletişimi api ile sağlanmıştır.Projenin veritabanı şemalarını yönetmek ve güncellemek için migrationlar kullanılmıştır.Gelen istekleri işleyip gerekli yanıtları oluşturmak için Controllerlar hazırlanmıştır.Kimlik doğrulması için token tabanlı bir giriş yöntemi entegre edilmiştir. Bu projede CQRS ve Unit of Work prensipleri kullanılarak, komut (command) ve sorgu (query) işlemleri ayrılmış, böylece performans ve ölçeklenebilirlik avantajları elde edilmiştir. Bu şekilde, BayiSepeti projesi güçlü bir altyapı ve kullanıcı dostu bir arayüzle bayilere toptan ürün alımı ve yönetimi imkanı sunan bir B2B platformu haline getirilmek amaçlanmıştır.

![login](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/221578ff-b4cf-439b-adba-27fc2421c3e1)



| Admin Paneli | Bayi Siparişleri Onaylama ve İptal Etme | Onaylanan Siparişler | Stok Durumu | Bayi Analizi |
| :-------------: | :-----------------------------------: | :------------------: | :---------: | :-----------: |
| ![adminpaneli ](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/d2ff5a02-f110-425d-9fa4-e3050741c662)| ![Bekleyen Sipariş Onay](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/947c3c42-a052-458c-987c-5a3a1768dbf3)| ![Stock Güncelleme ](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/53917578-c164-4af6-a106-a7bf836eb628)| ![bayi analizi](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/7d45a976-4765-4982-b6b0-54dd36379809) | ![bayi analizi](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/7d45a976-4765-4982-b6b0-54dd36379809)|

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
| ![Duyuru Gönder](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/6e1f64a0-1a3b-4387-b7db-2fe414b5a3da) | ![Anasayfa](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/95b9d89b-a604-489d-b4eb-8b2d5bbdea7d)| ![hakkında](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/94f84765-8e80-432f-a97d-7366ec709ea6) |![İletişim](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/3b4fcbf2-6e1f-4ab9-940a-a23e405e46ac) |

| Onaylanan ve Bekleyen Siparişler | Bayi Sepeti Pay |Bayi Sepeti Makbuz | Red | Onay |
| :------------: | :-----------------------------: | :--------------: | :-----------------: | :--: |
|![Bekleyen ve onaylanan siparişler ](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/e09a368d-b90f-4d74-99c8-44d9e1d9e562) |![Odeme Ekranı](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/aeb13116-6bce-4729-9dd2-7e0624f456fe)|![Makbuz](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/8cedfa82-5802-4d50-bd5b-c543d46fb661) | ![hata alerti](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/8f18ee9f-5f2c-46d8-9330-6cb97c0cb082)| ![Doğru Alerti](https://github.com/cagriozden/Final.Case-Taslak/assets/88632615/b33472f0-3afe-43e7-96d8-b429d73d61cf) |
