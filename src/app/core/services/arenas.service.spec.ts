import { TestBed } from '@angular/core/testing';

import { ArenasService } from './arenas.service';

describe('ArenasService', () => {
  let service: ArenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
