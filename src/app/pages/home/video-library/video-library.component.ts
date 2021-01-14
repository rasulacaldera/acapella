import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoLibraryService } from 'src/services/video-library.service';

@Component({
  selector: 'video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.scss']
})
export class VideoLibraryComponent implements OnInit {
  videoSources: any = [];
  loading: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private videoLibraryService: VideoLibraryService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.videoLibraryService.getLatestVideos(9).subscribe(
      res => {
        this.videoSources = res;
        this.videoSources = this.videoSources.map(source => {
          return {
            url: source.url
          };
        });
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  getSafeUrl({ url }) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
