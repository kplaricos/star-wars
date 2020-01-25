import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { PaginationModule, CarouselModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';
import { PlanetDetailsComponent } from './views/planet-details/planet-details.component';
import { AppComponentsModule } from './components/components.module';
import { NavbarMenuComponent } from './views/components/navbar-menu/navbar-menu.component';
import { NumeralPipe } from './pipes/numeral.pipe';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailsComponent,
    NavbarMenuComponent,
    NumeralPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    // App modules
    ServicesModule,
    AppComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
