import { getFile, getImage, getJSON, getString, request } from "http";
import { Injectable } from "@angular/core";
import Book from "../book/book";

@Injectable()

export default class BooksService{

  private endpointUrl:string = "http://172.18.21.113:8080/";

  bookList:Book[]

  constructor(){
    this.bookList = new Array<Book>()
  }


  fetchAllBooks():Promise<Book[]>{

    return new Promise((resolve) => {

      getJSON(`${this.endpointUrl}/books.json`).then(((res:any)=>{


        for(let bookJSON of res.books){

          let book_ = new Book({
            objectID: bookJSON.objectId,
            title: bookJSON.title,
            details: bookJSON.details,
            thumbCover: bookJSON.thumb_cover,
            cover: bookJSON.cover

          });

          book_.fetchThumbCoverImage();

          this.bookList.push(book_)
        }

        resolve(this.bookList)

      }))

    });

  }

  getAllBooks():Promise<Book[]>{

    if(this.bookList.length == 0){

      return this.fetchAllBooks()

    }else{
      return new Promise((resolve)=>{
        resolve(this.bookList)
      })
    }

  }

  getBook(id:string):Promise<Book>{
    return new Promise((resolve) => {
      resolve(this.bookList.filter((b:Book) => b.objectID == id)[0]);
    })
  }

}