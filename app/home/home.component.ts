import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import BooksService from "../books/books.service";

@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private _:BooksService
  ){}

  showBooks(){
    this.router.navigate(["books"])
  }


  ngOnInit(){

  }
}