import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsComponent } from './planets.component';
import { PlanetSearchComponent } from 'src/app/components/planet-search/planet-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationModule, CarouselModule } from 'ngx-bootstrap';
import { AppComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlanetDetailsComponent } from '../planet-details/planet-details.component';
import { NumeralPipe } from 'src/app/pipes/numeral.pipe';
import { FormsModule } from '@angular/forms';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PaginationModule.forRoot(),
        CarouselModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule,
        AppRoutingModule,
        AppComponentsModule,
        ServicesModule
      ],
      declarations: [
        PlanetsComponent,
        PlanetDetailsComponent,
        NumeralPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
