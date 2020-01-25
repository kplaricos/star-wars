import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PlanetService } from './planet.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    PlanetService
  ]
})
export class ServicesModule { }
