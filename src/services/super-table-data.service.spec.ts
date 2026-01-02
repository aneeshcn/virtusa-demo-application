import { TestBed } from '@angular/core/testing';

import { SuperTableDataService } from './super-table-data.service';

describe('SuperTableDataService', () => {
  let service: SuperTableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperTableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
