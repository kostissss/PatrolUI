import { TestBed } from '@angular/core/testing';

import { AccountsService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
