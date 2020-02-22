import { Component, OnInit } from '@angular/core';
import { blogpost } from '../models/blogpost';
import { BlogPostService } from '../Services/blog-post.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  data : blogpost[];

  constructor(private service : BlogPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.service.getPosts().toPromise().then(res=>{
      this.data = res as blogpost[]
    }).catch(err=>console.log(err));
  }
}
