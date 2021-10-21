import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSucessComponent } from "./order-sucess/order-sucess.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoryService } from "./services/category.service";
import { BookService } from "./services/book.service";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    BooksComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
  providers: [CategoryService, BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
