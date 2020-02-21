import { Component, OnInit } from '@angular/core';
import {BlogPostService} from '../Services/blog-post.service';
import {blogpost} from '../models/blogpost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

  

}
