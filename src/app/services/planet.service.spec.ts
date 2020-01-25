import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlanetService } from './planet.service';

describe('PlanetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      PlanetService
    ]
  }));

  it('should be created', () => {
    const service: PlanetService = TestBed.get(PlanetService);
    expect(service).toBeTruthy();
  });
});
