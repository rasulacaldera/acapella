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

  constructor(
    private sanitizer: DomSanitizer,
    private videoLibraryService: VideoLibraryService
  ) {}

  ngOnInit() {
    this.videoLibraryService.getLatestVideos(9).subscribe(res => {
      this.videoSources = res;
    });
  }

  getSafeUrl({ url }) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
