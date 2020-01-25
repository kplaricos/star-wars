import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetSearchComponent } from './planet-search/planet-search.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    PlanetSearchComponent
  ],
  exports: [
    PlanetSearchComponent
  ]
})
export class AppComponentsModule { }
