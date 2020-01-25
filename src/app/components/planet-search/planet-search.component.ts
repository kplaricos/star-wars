import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { Observable, Subject, Subscription } from 'rxjs';
import { PaginateResponse, PlanetService } from 'src/app/services';
import { Planet } from 'src/app/models';
import { debounceTime, distinctUntilChanged, switchMap, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.scss']
})
export class PlanetSearchComponent implements OnInit, OnDestroy {
  searching: boolean;
  planets$: Observable<PaginateResponse<Planet>>;
  @Output() result: EventEmitter<PaginateResponse<Planet>> = new EventEmitter()
  private subscriptions: Subscription[] = [];
  private searchTerms = new Subject<string>();

  constructor(
    private planetService: PlanetService
  ) {}

  ngOnInit() {
    this.planets$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.planetService.searchPlanets(term)),
      tap(_ => this.searching = false)
    );

    this.subscriptions.push(
      this.planets$.subscribe(planets => {
        this.result.emit(planets);
      }, error => {
        console.log('Error occured while searching', error);
      }, () => this.searching = false)
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  search(value: string) {
    this.searching = true;
    this.searchTerms.next(value);
  }

}
