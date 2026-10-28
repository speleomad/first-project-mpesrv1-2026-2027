import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  info:any;
  newComment:boolean=false;
  comments:Comment[]=[]
  comment:Comment={id:-1, date:null, message:""}

   constructor(private aboutService:AboutService){}
  ngOnInit(): void {
     console.log("init data from aboutservice")
   this.info=this.aboutService.getInfos();
   this.comments=this.aboutService.getComments();
  }

  onAddComment(){
     console.log("call of addComment from aboutcomponent")
    this.aboutService.addComment({
      id:this.comment.id, 
      date: this.comment.date,
      message: this.comment.message
    })
   // console.log("New comment: "+this.comment.message);
    /* this.comments.push({
      date:this.comment.date, message:this.comment.message
    })
    console.log(this.comments) */
  }

}
