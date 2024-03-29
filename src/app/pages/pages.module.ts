import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { ContributeBtnPanelComponent } from './home/contribute-btn-panel/contribute-btn-panel.component';
import { DonateComponent } from './donate/donate.component';
import { BuyComponent } from './buy/buy.component';
import { WhoAreWeComponent } from './home/who-are-we/who-are-we.component';
import { LatestBlogsComponent } from './home/latest-blogs/latest-blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoLibraryComponent } from './home/video-library/video-library.component';
import { DonateCardComponent } from './donate/donate-card/donate-card.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeCarouselComponent,
    ContributeBtnPanelComponent,
    DonateComponent,
    BuyComponent,
    WhoAreWeComponent,
    LatestBlogsComponent,
    VideoLibraryComponent,
    DonateCardComponent,
    TermsAndConditionsComponent,
    BlogComponent
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, ReactiveFormsModule]
})
export class PagesModule {}
