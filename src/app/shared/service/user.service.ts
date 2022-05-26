import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment, IPost, ITodo, IUser } from '../model/user-app.model';
import { Observable } from 'rxjs';

const URL_API = `https://jsonplaceholder.typicode.com`;

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${URL_API}/users`);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${URL_API}/users/${id}`);
  }

  getPostsByUserId(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${URL_API}/users/${id}/posts`);
  }

  getCommentByPostId(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${URL_API}/posts/${id}/comments`);
  }

  getTodosByUserId(id: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${URL_API}/users/${id}/todos`);
  }

}
