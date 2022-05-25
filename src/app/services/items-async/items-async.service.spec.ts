import { TestBed } from '@angular/core/testing';

import { ItemsAsyncService } from './items-async.service';

describe('ItemsAsyncService', () => {
  let service: ItemsAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
