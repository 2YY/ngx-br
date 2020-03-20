import { TestBed } from '@angular/core/testing';

import { LibNgxBrService } from './lib-ngx-br.service';

describe('LibNgxBrService', () => {
  let service: LibNgxBrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNgxBrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
