import { Component, OnInit } from '@angular/core';
import { SERVER } from 'src/environments/environment';
import { BlogService } from 'src/services/blog.service';

@Component({
  selector: 'latest-blogs',
  templateUrl: './latest-blogs.component.html',
  styleUrls: ['./latest-blogs.component.scss']
})
export class LatestBlogsComponent implements OnInit {
  blogPosts: any = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getLatestBlogs(3).subscribe(res => {
      this.blogPosts = res;
    });
  }

  getImageSrc(blog) {
    return blog.img;
  }

  getImgUrl(blogPost) {
    return SERVER + blogPost.images[0].url;
  }

  getSummaryText(blogPost) {
    return blogPost.summary.trim().slice(0, 500) + '...';
  }
}
