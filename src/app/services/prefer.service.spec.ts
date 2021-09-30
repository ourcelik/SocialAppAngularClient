import { TestBed } from '@angular/core/testing';

import { PreferService } from './prefer.service';

describe('PreferService', () => {
  let service: PreferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
