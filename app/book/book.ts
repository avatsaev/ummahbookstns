export default class Book {
  title:string;
  details:string;
  objectID:string

  constructor({objectID, title,details}:{objectID, title:string, details:string}){

    this.title = title
    this.details = details
    this.objectID = objectID

  }


}