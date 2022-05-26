import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  @Input() comment!: IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
