import { TestBed } from '@angular/core/testing';

import { BdRegistrAppService } from './bd-registr-app.service';

describe('BdRegistrAppService', () => {
  let service: BdRegistrAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdRegistrAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
