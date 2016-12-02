import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// let dialogs = require("ui/dialogs");

@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ){
    // dialogs.confirm("Your message").then(function (result) {
    //   console.log("Dialog result: " + result);
    // });
  }

  showBooks(){
    this.router.navigate(["books"])
  }


  ngOnInit(){
    // this.isBusy = true
    // this.api.get_all_data().then((res:Array<Country> = []) => {
    //   this.countries = res
    //   this.isBusy = false
    // });
  }
}