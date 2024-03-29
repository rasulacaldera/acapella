import { Injectable } from '@angular/core';
import { SERVER } from 'src/environments/environment';
import { HttpClientService } from 'src/utils/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private BLOG_SERVICE: string = SERVER + '/blogs';

  constructor(private http: HttpClientService) {}

  getLatestBlogs(limit) {
    return this.http.get(
      this.BLOG_SERVICE + '?active_eq=true&_sort=id:DESC&_limit=' + limit
    );
  }

  getBlogById(id) {
    return this.http.get(this.BLOG_SERVICE + '?active_eq=true&id_eq=' + id);
  }
}
