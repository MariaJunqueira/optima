import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { LanguageService } from './shared/services/language/language.service';

class MockLanguageService {
  initLang = jasmine.createSpy('initLang');
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let languageService: MockLanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [{ provide: LanguageService, useClass: MockLanguageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService) as unknown as MockLanguageService;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize language on component initialization', () => {
    fixture.detectChanges();
    expect(languageService.initLang).toHaveBeenCalled();
  });
});
