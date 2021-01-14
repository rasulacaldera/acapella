import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SERVER } from 'src/environments/environment';
import { BlogService } from 'src/services/blog.service';
import marked from 'marked';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: any = undefined;
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe(
      params => {
        let id = params['id'];
        this.blogService.getBlogById(id).subscribe(res => {
          let processingBlog = res[0];
          this.blog = {
            title: processingBlog.title,
            img: SERVER + processingBlog.images[0].url,
            body: processingBlog.body
          };
        });
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  getInnerHTML() {
    return marked.setOptions({}).parse(this.blog.body);
  }
}
