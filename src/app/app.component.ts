import { Component, OnInit } from '@angular/core';
import { IComment, IPost, ITodo, IUser } from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users: IUser[] = [];
  userInfo!: IUser;
  posts: IPost[] = [];
  todos: ITodo[] = [];

  isPostsVisible: boolean = false;
  isTodosVisible: boolean = false;
  isAlbumsVisible: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();

  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.users = users;
      console.log(users);
    })
  }

  getUserInfo(id: number) {
    this.userService.getUserById(id).subscribe((user: IUser) => {
      this.userInfo = user;
      this.posts = [];
    })
  }

  getPosts(id: number): void {
    this.isPostsVisible = true;
    this.isTodosVisible = false;
    this.isAlbumsVisible = false;

    this.userService.getPostsByUserId(id).subscribe((posts: IPost[]) => {
      this.posts = posts;
    })
  }

  getTodos(userId: number) {
    this.isPostsVisible = false;
    this.isTodosVisible = true;
    this.isAlbumsVisible = false;

    this.userService.getTodosByUserId(userId).subscribe((todos: ITodo[]) => {
      this.todos = todos;
    })
  }


}
