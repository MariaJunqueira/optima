import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TestimonialComponent } from './testimony/testimonial.component';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [TestimonialComponent, TranslateModule],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.scss'
})
export class OurStoryComponent {

}
