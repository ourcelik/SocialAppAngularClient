import { TestBed } from '@angular/core/testing';

import { RoomMemberService } from './room-member.service';

describe('RoomMemberService', () => {
  let service: RoomMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
