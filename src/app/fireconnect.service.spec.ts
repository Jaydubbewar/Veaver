import { TestBed } from '@angular/core/testing';

import { FireconnectService } from './fireconnect.service';

describe('FireconnectService', () => {
  let service: FireconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
