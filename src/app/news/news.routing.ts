import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewsComponent} from './news/news.component';
import {NewsListComponent} from './news-list/news-list.component'
const newsRoutes:Routes = [
  {
      path: 'news',
      component: NewsComponent,
      children: [
          {
              path: '',
              redirectTo: 'list',
              pathMatch: 'full'
          },
          {
              path: 'list',
              component: NewsListComponent
          }
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule]
})
export default class NewsRouterModule {}
