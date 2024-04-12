import { TestBed } from '@angular/core/testing';

import { NotificationRequestService } from './notification-request.service';

describe('NotificationRequestService', () => {
  let service: NotificationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
