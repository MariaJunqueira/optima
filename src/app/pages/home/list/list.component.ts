import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent { }
