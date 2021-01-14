import { Component, Input, OnInit } from '@angular/core';
import { SERVER } from 'src/environments/environment';
import marked from 'marked';

@Component({
  selector: 'donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.scss']
})
export class DonateCardComponent implements OnInit {
  @Input() contribution: any;

  constructor() {}

  ngOnInit() {}

  openFile(document) {
    window.open(SERVER + document.url, '_blank');
  }

  getInnerHTML() {
    return marked.setOptions({}).parse(this.contribution.description);
  }

  onClick($event) {
    $event.preventDefault();
  }

  navigate(url) {
    window.open(url, '_blank');
  }

  getDonationProgress() {
    let completedPercentage =
      (this.contribution.current_donations / this.contribution.target) * 100;
    return {
      width: completedPercentage + '%'
    };
  }
}
