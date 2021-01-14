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

  getImageUrl() {
    return SERVER + this.contribution.image.url;
  }

  onClick($event) {
    $event.preventDefault();
  }

  getDonationUrl() {
    return '/donate?id=' + this.contribution.id;
  }
}
