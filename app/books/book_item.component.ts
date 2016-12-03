import { Component, OnInit, Input } from "@angular/core";
import Book from "../book/book";
import {Router} from "@angular/router";


@Component({
  selector: "book-item",
  template: `

    <StackLayout (tap)="showBook(book)" 
      orientation="horizontal" 
      class=" visible list-group-item" 
    >
      <Image [src]="book.thumbCoverImage" 
        stretch ="aspectFit" 
        height="60" 
        width="60"
       ></Image>
      
      <StackLayout>
        
        <Label 
          marginLeft="10" 
          [text]="book.title" 
          textWrap="true" 
          class="label-item"
        ></Label>
        
        <Label 
          marginLeft="10" 
          marginTop="5" 
          color="#696969"  
          fontSize="12" 
          [text]="book.details"  
          class="label-item"
         ></Label>
         
      </StackLayout>
      
    </StackLayout>

  `
})

export class BookItemComponent implements OnInit {
  @Input() book:Book;

  constructor(private router:Router){}

  showBook(book:Book){
    this.router.navigate(["book",book.objectID])
  }

  ngOnInit(){}
}