import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSucessComponent } from "./order-sucess/order-sucess.component";
import { LoginComponent } from "./login/login.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  { path: "books", component: BooksComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },

  { path: "check-out", component: CheckOutComponent },
  { path: "order-sucess", component: OrderSucessComponent },
  { path: "my/orders", component: MyOrdersComponent },
  { path: "admin/products", component: AdminProductsComponent },
  { path: "admin/orders", component: AdminOrdersComponent },
];

// const routes: Routes = [
//   { path: "", component: HomeComponent },
//   { path: "books", component: BooksComponent },
//   { path: "shopping-cart", component: ShoppingCartComponent },
//   { path: "check-out", component: CheckOutComponent },
//   { path: "order-sucess", component: OrderSucessComponent },
//   { path: "login", component: LoginComponent },
//   { path: "admin/products", component: AdminProductsComponent },
//   { path: "admin/orders", component: AdminOrdersComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
