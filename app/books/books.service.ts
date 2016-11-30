import { getFile, getImage, getJSON, getString, request } from "http";
import { Injectable } from "@angular/core";
import Book from "../book/book";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {resolveFileName} from "file-system/file-name-resolver";



@Injectable()

export default class BooksService{

  private endpointUrl:string = "http://192.168.1.32:8080/";

  bookList:Array<Book>

  constructor(){
    this.bookList = []
  }


  fetchAllBooks():Promise<Array<Book>>{

    return new Promise((resolve) => {

      getJSON(`${this.endpointUrl}/books.json`).then(((res:any)=>{


        for(let bookJSON of res.books){

          this.bookList.push(new Book({
            objectID: bookJSON.objectId,
            title: bookJSON.title,
            details: bookJSON.details
          }))
        }

        resolve(this.bookList)

      }))

    });

  }

  getAllBooks():Promise<Array<Book>>{

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