import { TestBed } from '@angular/core/testing';

import { RealtimeNotificationService } from './realtime-notification.service';

describe('RealtimeNotificationService', () => {
  let service: RealtimeNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
