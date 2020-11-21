import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.scss']
})
export class VideoLibraryComponent implements OnInit {
  videoSources: any = [
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw',
    'https://www.youtube.com/embed/7GjOOyBoELw'
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
