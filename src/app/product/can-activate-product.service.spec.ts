import { TestBed, inject } from '@angular/core/testing';

import { CanActivateProductService } from './can-activate-product.service';

describe('CanActivateProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateProductService]
    });
  });

  it('should be created', inject([CanActivateProductService], (service: CanActivateProductService) => {
    expect(service).toBeTruthy();
  }));
});
