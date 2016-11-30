import { Component, OnInit } from "@angular/core";
import Book from "../book/book";




@Component({
  selector: "app-books",
  templateUrl: "books/books.component.html",
  styleUrls: ["books/books.component.css"],
})

export class BooksComponent implements OnInit {

  books:Array<Book>;
  isBusy:boolean;

  constructor(

  ){}

  showDetails(e){
    //this.router.navigate(["details", e.index])
  }


  ngOnInit(){
    // this.isBusy = true
    // this.api.get_all_data().then((res:Array<Country> = []) => {
    //   this.countries = res
    //   this.isBusy = false
    // });
  }
}