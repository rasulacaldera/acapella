import { Injectable } from '@angular/core';
import { SERVER } from 'src/environments/environment';
import { HttpClientService } from 'src/utils/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class VideoLibraryService {
  private VIDEOS_SERVICE: string = SERVER + '/video-libraries';

  constructor(private http: HttpClientService) {}

  getLatestVideos(limit) {
    return this.http.get(
      this.VIDEOS_SERVICE + '?_sort=id:DESC&_limit=' + limit
    );
  }
}
