import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss']
})
export class RecentPhotosComponent implements OnInit {
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
