import {Component, OnInit, AfterViewInit, Input, ChangeDetectionStrategy} from "@angular/core";
import Book from "../book/book";
import BooksService from "./books.service";
import {Router} from "@angular/router";

import { Observable as RxObservable } from 'rxjs/Observable';


@Component({
  selector: "app-books",
  templateUrl: "books/books.component.html",
  styleUrls: ["books/books.component.css"],
})

export class BooksComponent implements OnInit, AfterViewInit{

  books:RxObservable<Book[]>;

  isBusy:boolean;

  constructor(
      private booksService:BooksService,
      private router:Router
  ){}


  showBook(book:Book){
    this.router.navigate(["book",book.objectID])
  }

  ngAfterViewInit(){

    this.books.subscribe()

  }



  ngOnInit(){
    this.isBusy = true

    this.books = RxObservable.create( (subscriber) => {

      this.booksService.getAllBooks()
          .then( (books:Book[]) => subscriber.next(books));

    });



  }
}