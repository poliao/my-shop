import { TestBed } from '@angular/core/testing';

import { HistorysaleService } from './historysale.service';

describe('HistorysaleService', () => {
  let service: HistorysaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorysaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
