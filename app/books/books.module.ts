import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { booksRouting } from "./books.routing";
import { BooksComponent } from "./books.component";
import BooksService from "./books.service";

@NgModule({
  providers: [
    BooksService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    booksRouting
  ],
  declarations: [
    BooksComponent
  ]
})
export class BooksModule { }
