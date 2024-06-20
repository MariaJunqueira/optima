import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { GridDebugComponent } from '../shared/components/grid-debug/grid-debug.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HighlightComponent } from '../shared/components/highlight/highlight.component';
import { CookieService } from '../shared/services/cookie/cookie.service';
import { COOKIE_LANG } from '../shared/services/language/language.constant';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent, GridDebugComponent, HeaderComponent, HighlightComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(public translate: TranslateService, private cookieService: CookieService) { }

  onLangChange(lang: string) {
    this.translate.use(lang);
    this.cookieService.setCookie(COOKIE_LANG, lang, 360);
  }
}
