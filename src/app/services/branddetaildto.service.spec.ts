import { TestBed } from '@angular/core/testing';

import { BranddetaildtoService } from './branddetaildto.service';

describe('BranddetaildtoService', () => {
  let service: BranddetaildtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranddetaildtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
