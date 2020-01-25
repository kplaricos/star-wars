/**
 * Represent a planet instance and helps have closed
 * model logics
 */
export class Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  'orbital_period': string;
  population: string;
  residents: Array<string>;
  'rotation_period': string;
  'surface_water': string;
  terrain: string;
  url: string;
  id: string;

  constructor(data: any = {}) {
    this.build(data);
  }

  private build(data) {
    this.climate = data.climate;
    this.created = data.created;
    this.diameter = data.diameter;
    this.edited = data.edited;
    this.films = data.films;
    this.gravity = data.gravity;
    this.name = data.name;
    this.orbital_period = data.orbital_period;
    this.population = data.population;
    this.residents = data.residents;
    this.rotation_period = data.rotation_period;
    this.surface_water = data.surface_water;
    this.terrain = data.terrain;
    this.url = data.url;

    // test that planet url includes number and use it to retrieve
    // planet details
    if (data.url && /(\d+)/.test(data.url)) {
      const result = /(\d+)/.exec(data.url);

      this.id = result[0];
    }
  }
}
