import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {blogpost} from '../models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private readonly rootUrl="https://localhost:44320/api/"; 
  
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.rootUrl+'BlogPosts');
  }

}
