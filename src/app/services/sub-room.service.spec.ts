import { TestBed } from '@angular/core/testing';

import { SubRoomService } from './sub-room.service';

describe('SubRoomService', () => {
  let service: SubRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
