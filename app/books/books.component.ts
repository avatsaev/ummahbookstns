import { Component, OnInit } from "@angular/core";
import Book from "../book/book";
import BooksService from "./books.service";
import {Router} from "@angular/router";




@Component({
  selector: "app-books",
  templateUrl: "books/books.component.html",
  styleUrls: ["books/books.component.css"],
})

export class BooksComponent implements OnInit {

  books:Array<Book>

  isBusy:boolean;

  constructor(
      private booksService:BooksService,
      private router:Router
  ){}


  showBook(book:Book){

    console.dump(book)
    this.router.navigate(["book",book.objectID])
  }



  ngOnInit(){

    this.booksService.getAllBooks()
        .then((books:Array<Book>) => this.books = books)
        .catch((e)=> console.dump(e));


    // this.isBusy = true
    // this.api.get_all_data().then((res:Array<Country> = []) => {
    //   this.countries = res
    //   this.isBusy = false
    // });
  }
}