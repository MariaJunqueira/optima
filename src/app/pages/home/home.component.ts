import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent, CommonModule, ListComponent, OurStoryComponent, PostListComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
