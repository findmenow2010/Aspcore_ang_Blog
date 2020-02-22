import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {blogpost} from '../models/blogpost';
import { Observable, from, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class BlogPostService {

  private readonly rootUrl="https://localhost:44320/api/"; 
  
  
  constructor(private http:HttpClient) { }

  getPosts() : Observable<blogpost[]>{
    return this.http.get<blogpost[]>(this.rootUrl+'blogposts').pipe(
      retry(1),
      catchError(this .errorHandler)
    );
  }

  getPostByID(blogID) : Observable<blogpost>{
    return this.http.get<blogpost>(this.rootUrl+'blogposts/'+blogID).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deletePost(postID:number) :Observable<blogpost>{
    return this.http.delete<blogpost>(this.rootUrl + 'blogposts/' + postID)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }






  errorHandler(error){
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMsg = error.error.message;
    } else {
      // Get server-side error
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }

}
