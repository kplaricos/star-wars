import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSearchComponent } from './planet-search.component';
import { ServicesModule } from 'src/app/services/services.module';

describe('PlanetSearchComponent', () => {
  let component: PlanetSearchComponent;
  let fixture: ComponentFixture<PlanetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServicesModule
      ],
      declarations: [ PlanetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
