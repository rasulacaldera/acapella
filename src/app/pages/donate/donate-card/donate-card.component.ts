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

  getInnerHTML({ collapased, description }) {
    description = collapased
      ? this.getTrimmedDescription(description)
      : description;
    return marked.setOptions({}).parse(description);
  }

  getImageUrl(image) {
    return SERVER + image.url;
  }

  getTrimmedDescription(description) {
    return description.substring(0, 750).trimRight() + '...';
  }

  onClick(contribution) {
    contribution.collapased = !contribution.collapased;
  }
}
