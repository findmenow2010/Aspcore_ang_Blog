import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { blogpost } from '../models/blogpost';

@Component({
  selector: 'app-blog-post-add-edit',
  templateUrl: './blog-post-add-edit.component.html',
  styleUrls: ['./blog-post-add-edit.component.scss']
})
export class BlogPostAddEditComponent implements OnInit {

  form : FormGroup;
  actionType: string;
  existBlog:blogpost;

  blogID : number;
  blogTitle : string;
  blogBody : string;

  errorMessage : any;

  constructor() { }

  ngOnInit() {
  }

}
