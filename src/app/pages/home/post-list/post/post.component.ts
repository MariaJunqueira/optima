import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PostData } from './post.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() postData!: PostData;
}
