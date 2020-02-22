import { Component, OnInit } from '@angular/core';
import { blogpost } from '../models/blogpost';
import { BlogPostService } from '../Services/blog-post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  blogPosts$: Observable<blogpost[]>;

  constructor(private service : BlogPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.blogPosts$ = this.service.getPosts();
    //console.log(this.service.getPosts());
  }

  delete(postId){
    const ans = confirm("are you sure ?");
    if(ans){
      this.service.deletePost(postId).subscribe((data)=>{
          this.getPosts();
      });
    }
  }


}
