import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  info={
    name: "Demo",
    email:"demo@test.com",
    tel: 99887755
  }
  newComment=false;
  comments=[]
  comment={date:new Date(), message:"default message"}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddComment(){
   // console.log("New comment: "+this.comment.message);
    this.comments.push({
      date:this.comment.date, message:this.comment.message
    })
    console.log(this.comments)
  }

}
