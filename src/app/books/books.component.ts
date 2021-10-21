import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { BookService } from "../services/book.service";
import { Category } from "../models/category";
import { Book } from "../models/book";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  filterBooks: Book[];
  categories: Category[];
  category: string;
  books: Book[] = this.bookService.getAll();
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private bookService: BookService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.categories = this.categoryService.getAll();

      this.category = params.get("category");

      this.filterBooks = this.category
        ? this.books.filter((p) => p.category === this.category)
        : this.books;
    });
  }

  ngOnInit() {
    // this.category = "1";
    // this.categories = this.categoryService.getAll();
    // this.books = this.bookService.getAll();
  }
}
