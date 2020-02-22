import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../Services/blog-post.service';
import { blogpost } from '../models/blogpost';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost$: Observable<blogpost>;
  blogPostID: number;

  constructor(private service: BlogPostService, private avroute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avroute.snapshot.params[idParam]) {
      this.blogPostID = avroute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.getBlogPost();
  }

  getBlogPost() {
    this.blogPost$ = this.service.getPostByID(this.blogPostID);
  }

}
