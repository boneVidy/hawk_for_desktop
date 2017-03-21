import { TestBed, inject } from '@angular/core/testing';

import { GetNewsListService } from './get-news-list.service';

describe('GetNewsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNewsListService]
    });
  });

  it('should ...', inject([GetNewsListService], (service: GetNewsListService) => {
    expect(service).toBeTruthy();
  }));
});
