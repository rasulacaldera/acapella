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
  loading: boolean = false;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loading = true;
    this.blogService.getLatestBlogs(3).subscribe(
      res => {
        this.blogPosts = res;
        this.blogPosts = this.blogPosts.map(blog => {
          return {
            title: blog.title,
            image: SERVER + blog.images[0].url,
            blogUrl: '/blog?id=' + blog.id,
            summary: blog.summary.trim().slice(0, 500) + '...'
          };
        });
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }
}
