import { getFile, getImage, getJSON, getString, request } from "http";
import { Injectable } from "@angular/core";



@Injectable()

export default class BooksService{

  private endpointUrl:string = "http://192.168.1.32:8080/";

  constructor(){}

  getAllBooks():Promise<any>{
    return getJSON(`${this.endpointUrl}/books.json`)
  }

}