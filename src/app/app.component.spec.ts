import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { PlanetDetailsComponent } from './views/planet-details/planet-details.component';
import { NavbarMenuComponent } from './views/components/navbar-menu/navbar-menu.component';
import { NumeralPipe } from './pipes/numeral.pipe';
import { PaginationModule, CarouselModule } from 'ngx-bootstrap';
import { ServicesModule } from './services/services.module';
import { AppComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        PaginationModule.forRoot(),
        CarouselModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        // App modules
        ServicesModule,
        AppComponentsModule
      ],
      declarations: [
        AppComponent,
        PlanetsComponent,
        PlanetDetailsComponent,
        NavbarMenuComponent,
        NumeralPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'star-wars'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('star-wars');
  });

  it('should render navbar menu componet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const navbar = fixture.debugElement.query(By.directive(NavbarMenuComponent));
    expect(navbar.nativeElement.querySelector('strong').textContent).toBe('LOGO');
  });
});
