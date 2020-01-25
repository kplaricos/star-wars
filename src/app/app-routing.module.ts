import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './views/planets/planets.component';
import { PlanetDetailsComponent } from './views/planet-details/planet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'planets/:id',
    component: PlanetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
