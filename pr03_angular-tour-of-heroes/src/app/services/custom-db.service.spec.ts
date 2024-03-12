import { TestBed } from '@angular/core/testing';

import { CustomDbService } from './custom-db.service';

describe('CustomDbService', () => {
  let service: CustomDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
