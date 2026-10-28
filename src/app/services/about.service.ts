import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
    info={
    name: "Demo from service",
    email:"demo@test.com",
    tel: 99887755
  }
  comments:Comment[]=[];
  constructor() { }

  getInfos(){
    console.log("info from service")
    return this.info;
  }
  addComment(comment:Comment){
     console.log("add comment from service")
    comment.id=this.comments.length+1;
    comment.date=new Date();
    this.comments.push(comment);
  }
  getComments(): Comment[]{
     console.log("get comment from service")
    return this.comments;
  }
}
