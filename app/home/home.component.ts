import { Component, OnInit } from "@angular/core";
import BooksService from '../books/books.service'

@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {



  constructor(
    private booksService:BooksService
  ){}

  listBooks(){
      console.log("request..")
    this.booksService.getAllBooks()
        .then((r) => {
          console.log("getting books...")
          console.dump(r)
        }).catch((e)=> console.dump(e));
  }

  ngOnInit(){
    // this.isBusy = true
    // this.api.get_all_data().then((res:Array<Country> = []) => {
    //   this.countries = res
    //   this.isBusy = false
    // });
  }
}