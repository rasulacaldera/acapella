import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-blogs',
  templateUrl: './latest-blogs.component.html',
  styleUrls: ['./latest-blogs.component.scss']
})
export class LatestBlogsComponent implements OnInit {
  blogPosts: any[] = [];

  constructor() {}

  ngOnInit() {
    let sampleBlog = {
      img: 'https://picsum.photos/370/240',
      title: 'Blog Title',
      post:
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text ' +
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text ' +
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text ' +
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text ' +
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text ' +
        'blog text blog text blog text blog text blog text blog text blog text blog text blog text blog text '
    };

    for (var i = 0; i < 3; i++) {
      this.blogPosts.push(sampleBlog);
    }
  }

  getImageSrc(blog) {
    return blog.img;
  }
}
