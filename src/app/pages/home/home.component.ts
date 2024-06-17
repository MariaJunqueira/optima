import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent, ListComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
