import { TestBed } from '@angular/core/testing';

import { BreakingNewsService } from './breaking-news.service';

describe('BreakingNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakingNewsService = TestBed.get(BreakingNewsService);
    expect(service).toBeTruthy();
  });
});
