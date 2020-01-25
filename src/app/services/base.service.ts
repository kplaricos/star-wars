import { HttpParams } from '@angular/common/http';
import * as klasses from '../models';

export interface PaginateResponse<T> {
    records: T[];
    meta: any;
}

export abstract class BaseService {
  /**
   * Compose query params used for requests
   * @param filters
   */
  toHttpParams(filters: any): HttpParams {
    let params = new HttpParams();

    console.log(filters);

    // tslint:disable-next-line:forin
    for (const key in filters) {
      params = params.set(key, filters[key]);
    }

    return params;
  }

  /**
   * Parse returned response to simple object schema
   * @param data
   * @param key
   * @param klass
   */
  toPaginateRecords<T>(data, key, klass): PaginateResponse<T> {
    const records: T[] = data[key].map(d =>  new klasses[klass](d));
    return {
      records,
      meta: {
        count: data.count,
        next: data.next,
        previous: data.previous
      }
    };
  }
}
