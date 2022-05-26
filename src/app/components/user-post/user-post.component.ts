import { Component, Input, OnInit } from '@angular/core';
import { IComment, IPost } from 'src/app/shared/model/user-app.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post!: IPost;

  comments: IComment[] = [];

  isShowComments: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getComments() {
    this.isShowComments = !this.isShowComments;

    if (this.isShowComments) {
      this.userService.getCommentByPostId(this.post.id).subscribe((comments: IComment[]) => {
        this.comments = comments;
        //console.log(comments);
      })
    }

  }

}
