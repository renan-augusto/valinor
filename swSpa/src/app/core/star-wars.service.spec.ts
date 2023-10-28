import { TestBed } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';
import { HttpClientModule } from '@angular/common/http';

describe('StarWarsService', () => {
  let service: StarWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StarWarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
