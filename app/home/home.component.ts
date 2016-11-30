import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ){}

  showBooks(e){
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