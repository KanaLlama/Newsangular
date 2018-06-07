import { TestBed, inject } from '@angular/core/testing';

import { StockageService } from './stockage.service';

describe('StockageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockageService]
    });
  });

  it('should be created', inject([StockageService], (service: StockageService) => {
    expect(service).toBeTruthy();
  }));
});
