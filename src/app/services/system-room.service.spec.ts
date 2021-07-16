import { TestBed } from '@angular/core/testing';

import { SystemRoomService } from './system-room.service';

describe('SystemRoomService', () => {
  let service: SystemRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
