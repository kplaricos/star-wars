import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsComponent } from './planet-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlanetsComponent } from '../planets/planets.component';
import { AppComponentsModule } from 'src/app/components/components.module';
import { PaginationModule, CarouselModule } from 'ngx-bootstrap';
import { NumeralPipe } from 'src/app/pipes/numeral.pipe';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from 'src/app/services/services.module';

describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        TranslateModule.forRoot(),
        AppComponentsModule,
        FormsModule,
        PaginationModule.forRoot(),
        CarouselModule.forRoot(),
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
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
