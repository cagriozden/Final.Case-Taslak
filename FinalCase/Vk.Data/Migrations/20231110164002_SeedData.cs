﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vk.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
    INSERT INTO [dbo].[User]([UserNumber], [UserName], [UserEmail], [UserPassword], [UserPasswordRetryCount], [UserRole], [UserBalance], [UserProfitMargin], [InsertDate])
    VALUES (100001, 'Lucy1', 'lucy1@gmail.com', 'bfca5277c883b619adf051f25604411a', 0, 'Admin', 500.0, 0, '2023-07-07')

    INSERT INTO [dbo].[User]([UserNumber], [UserName], [UserEmail], [UserPassword], [UserPasswordRetryCount], [UserRole], [UserBalance], [UserProfitMargin], [InsertDate])
    VALUES (100002, 'Lucy2', 'lucy2@gmail.com', 'f315edbfd7906ba36d95c014a754cfd4', 0, 'Dealer', 500.0, 0, '2023-07-07')


    INSERT INTO [dbo].[Product]([ProductName], [ProductImage], [ProductQuantity], [ProductPrice], [ProductInformation], [InsertDate])
    VALUES ('Product 1', 'image1.jpg', 100, 10.0, 'Description 1', '2023-05-05')

    INSERT INTO [dbo].[Product]([ProductName], [ProductImage], [ProductQuantity], [ProductPrice], [ProductInformation], [InsertDate])
    VALUES ('Product 2', 'image2.jpg', 150, 15.0, 'Description 2', '2023-05-05')


    INSERT INTO [dbo].[Address]([UserId], [AddressLine1], [AddressLine2], [City], [County], [PostalCode], [InsertDate])
    VALUES (1, 'Address 1 Line 1', 'Address 1 Line 2', 'City 1', 'County 1', 12345, '2023-07-07')

    INSERT INTO [dbo].[Address]([UserId], [AddressLine1], [AddressLine2], [City], [County], [PostalCode], [InsertDate])
    VALUES (2, 'Address 2 Line 1', 'Address 2 Line 2', 'City 2', 'County 2', 67890, '2023-07-07')


    INSERT INTO [dbo].[Order]([UserId], [OrderStatus], [OrderPaymentMethod], [OrderAmount], [InsertDate])
    VALUES (1, 'Waiting', 'Credit Card', 100.0, '2023-06-01')

    INSERT INTO [dbo].[Order]([UserId], [OrderStatus], [OrderPaymentMethod], [OrderAmount], [InsertDate])
    VALUES (2, 'Completed', 'EFT', 75.0, '2023-06-02')

    INSERT INTO[dbo].[Basket] ([UserId], [ProductId], [OrderId], [BasketQuantity], [BasketPrice], [BasketStatus], [InsertDate])
    VALUES(1, 1, 1, 2, 20.0, 0, '2023-06-01')

    INSERT INTO[dbo].[Basket] ([UserId], [ProductId], [OrderId], [BasketQuantity], [BasketPrice], [BasketStatus], [InsertDate])
    VALUES(2, 2, 2, 3, 45.0, 0, '2023-06-02')
       

"
);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
