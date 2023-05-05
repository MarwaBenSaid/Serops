import { TestBed } from '@angular/core/testing';

import { DataprojectService } from './dataproject.service';

describe('DataprojectService', () => {
  let service: DataprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
