import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { POSTS } from '../home.const';
import { PostComponent } from './post/post.component';
import { PostData } from './post/post.interface';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts: PostData[] = POSTS;
}
