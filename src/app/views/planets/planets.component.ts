import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models';
import { PlanetService, PaginateResponse } from '../../services';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  loading = false;
  planets: PaginateResponse<Planet>;
  planetsMeta: any;
  currentPage: any;
  subscriptions: Subscription[] = [];

  constructor(
    private planetService: PlanetService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.queryParams.subscribe(params => {
        const data = this.parseQueryParams(params);
        this.currentPage = data.page;

        this.loadPlanets(data.page, data.filters);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  loadPlanets(page: number, filters = {}) {
    this.loading = true;

    return this.planetService
               .getPlanets(page, filters)
               .subscribe((planets: PaginateResponse<Planet>) => {
                 this.planets = planets;
               }, (error => {
                 console.log('An error has occured', error);
               }), () => this.loading = false);
  }

  onPageChanged(event: PageChangedEvent): void {
    this.loadPlanets(event.page);
  }

  onSearchResult(planets: PaginateResponse<Planet>) {
    if (!planets.records.length) {
      this.loadPlanets(1);
    } else {
      this.planets = planets;
    }
  }

  private parseQueryParams(params) {
    // tslint:disable-next-line:radix
    const page = parseInt(params['page']) || 1;
    // tslint:disable-next-line:radix
    let search;

    search = params['search'];
    const filters = search ? { search } : null;

    return { page, filters };
  }

}
