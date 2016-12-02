
import {getImage} from "http";
import {ImageSource} from "image-source";

export default class Book {
  title:string;
  details:string;
  objectID:string;
  thumbCover:any;
  cover:any;
  thumbCoverImage:ImageSource|string;
  coverImage:ImageSource|string;

  constructor({
    objectID,
    title,
    details,
    thumbCover,
    cover
  }:{
    objectID:string,
    title:string,
    details:string,
    thumbCover?:any,
    cover?:any
  }){


    this.title = title
    this.details = details
    this.objectID = objectID
    this.thumbCover = thumbCover;
    this.cover = cover;
    this.thumbCoverImage = "res://CoverThumbPlaceHolder";
    this.coverImage = "res://CoverThumbPlaceHolder"

  }

  fetchThumbCoverImage():Promise<ImageSource>{

    if(!this.thumbCoverImage || this.thumbCoverImage=="res://CoverThumbPlaceHolder"){
      return getImage(this.thumbCover.url)
          .then((res) => this.thumbCoverImage = res);
    }else{
      return new Promise( resolve => resolve(this.thumbCoverImage));
    }

  }

  fetchCoverImage():Promise<ImageSource>{
    if(!this.coverImage || this.coverImage=="res://CoverThumbPlaceHolder"){
      return getImage(this.cover.url)
          .then((res) => this.coverImage = res);
    }else{
      return new Promise( resolve => resolve(this.coverImage));
    }
  }

}