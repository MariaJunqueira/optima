export interface PostData {
  variant: 'primary' | 'secondary';
  img: {
    url: string;
    alt: string;
  };
  heading: string;
  text: string;
  button: {
    text: string;
    url: string;
  }
}
