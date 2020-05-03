import { TestBed } from '@angular/core/testing';

import { RlTableUiService } from './rl-table-ui.service';

describe('RlTableUiService', () => {
  let service: RlTableUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RlTableUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
