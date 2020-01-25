import { Injectable } from '@angular/core';
import { BaseService, PaginateResponse } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.configs';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Planet } from '../models';

@Injectable()
export class PlanetService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * get all the planets resources
   * @param filters any search params to filter request
   */
  getPlanets(page: number, filters: any = {}): Observable<PaginateResponse<Planet>> {
    const params = this.toHttpParams(Object.assign({page}, filters));

    return this.http.get<Planet[]>(Config.toApiUrl('planets/'), { params })
                    .pipe(
                      map((planets: Planet[]) => {
                        return this.toPaginateRecords<Planet>(planets, 'results', 'Planet');
                      }),
                      catchError(this.handleError<PaginateResponse<Planet>>('getPlanets', this.onErrorData()))
                    );
  }

  /* GET planets whose name contains search term */
  searchPlanets(term: string): Observable<PaginateResponse<Planet>> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of(this.onErrorData());
    }

    return this.http.get<Planet[]>(Config.toApiUrl(`planets/?search=${term}`))
                    .pipe(
                      map((planets: Planet[]) => {
                        return this.toPaginateRecords<Planet>(planets, 'results', 'Planet');
                      }),
                      catchError(this.handleError<PaginateResponse<Planet>>('searchPlanets', this.onErrorData()))
                    );
  }

  /**
   * Get single planet by id
   * @param id
   */
  getPlanet(id: string): Observable<Planet> {
    return this.http.get<Planet>(Config.toApiUrl(`planets/${id}/`))
                    .pipe(
                      catchError(this.handleError<Planet>(`getPlanet id=${id}`))
                    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: Should send the error to remote logging infrastructure
      // But for test purpose log to console
      console.error(`${operation} failed: ${error.message}`, error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * In case there is an http error, dont't break the app
   * and return an empty result
   */
  private onErrorData() {
    const emptyResult = {
      count: 0,
      results: [],
      next: null,
      previous: null
    };

    return this.toPaginateRecords<Planet>(emptyResult, 'results', 'Planet');
  }
}
