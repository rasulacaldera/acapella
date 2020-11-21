import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  countDownDate = new Date('Jan 1, 2021 00:00:00').getTime();
  countDownDisplay = 'Calculating...';

  constructor() {}

  ngOnInit() {
    !environment.production ? (window.location.href = '/home') : null;

    setInterval(() => {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in an element with id="demo"
      this.countDownDisplay =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    }, 1000);
  }
}
