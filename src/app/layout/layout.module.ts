import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
