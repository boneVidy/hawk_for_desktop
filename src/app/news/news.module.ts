import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import {NewsComponent} from './news/news.component';

import NewsRouterModule from './news.routing';
@NgModule({
  imports: [
    CommonModule,
    NewsRouterModule
  ],
  declarations: [NewsListComponent, NewsDetailComponent, NewsComponent],
  exports: [NewsComponent]
})
export class NewsModule { }
