import { TestBed } from '@angular/core/testing';

import { PostLikeService } from './post-like.service';

describe('PostLikeService', () => {
  let service: PostLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
