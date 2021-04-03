import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirect(url) {
    this.router.navigate([url]);
  }
}
