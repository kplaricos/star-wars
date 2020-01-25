import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from '../../services';
import { Subscription } from 'rxjs';
import { Planet } from '../../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  planet: Planet;
  loading = false
  suggests: Planet[] = [];
  searching: boolean;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.loading = true;

        const id = params['id'];

        this.planetService.getPlanet(id)
                          .subscribe((planet) => {
                            this.planet = planet;
                          }, (error) => {
                            console.log('an error has occured', error)
                          }, () => {
                            this.loading = false;
                            this.getMorePlanets();
                          });
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * Get similar planets based on the planet which details use is viewing.
   * First we retrieve planets that contains third first "host planet's" letters
   * and if the result length is less than one, then we search by last two letters
   * in "host planet" name.
   * the goal is to have at least two similares planets.
   *
   * The result shown to user should not contain the "Host planet"
   * @param {boolean} reverse
   */
  private getMorePlanets(reverse: boolean = false) {
    this.searching = true;
    const term = reverse ? this.planet.name.slice(-2) :
                           this.planet.name.substring(1, 3);

    this.subscriptions.push(
      this.planetService.searchPlanets(term)
                        .subscribe(planets => {
                          if (!reverse && (planets.records.length <= 1)) {
                            return this.getMorePlanets(true);
                          }

                          this.suggests = planets.records
                                                 .filter((item) => {
                                                   return item.name !== this.planet.name;
                                                 });
                        }, (error) => {
                          console.log('error', error);
                        }, () => this.searching = false)
    );
  }

}
