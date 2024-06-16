import { PostData } from './post-list/post/post.interface';

export const POSTS: PostData[] = [
  {
    variant: 'primary',
    img: {
      url: '/assets/images/highlight/main.webp',
      alt: 'Photo of a plate of pasta',
    },
    heading: 'post.discount.heading',
    text: 'post.discount.text',
    button: {
      text: 'post.discount.button',
      url: 'https://google.com'
    }
  }, {
    variant: 'secondary',
    img: {
      url: '/assets/images/highlight/main.webp',
      alt: 'Photo of a plate of pasta',
    },
    heading: 'post.discount.heading',
    text: 'post.discount.text',
    button: {
      text: 'post.discount.button',
      url: 'https://google.com'
    }
  }
];
