import {Component, OnInit, AfterViewInit} from "@angular/core";

import {ActivatedRoute} from '@angular/router'
import Book from "./book";
import {RouterExtensions} from "nativescript-angular";
import BooksService from "../books/books.service";



@Component({
  selector: "app-book",
  templateUrl: "book/book.component.html",
  styleUrls: ["book/book.component.css"]
})


export default class BookComponent implements OnInit, AfterViewInit{


  book:Book


  constructor(
    private route:ActivatedRoute,
    private booksService:BooksService

  ){

  }

  ngOnInit(){

    this.book = this.route.snapshot.data['book'];

    console.dump(this.book)

    // this.route.params.subscribe(params => {
    //
    //   this.booksService.getBook(params['id'])
    //       .then((book:Book) => this.book = book)
    //
    // });

  }

  ngAfterViewInit(){}




}



