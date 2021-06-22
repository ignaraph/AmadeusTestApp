import { TestBed } from '@angular/core/testing';

import { HotelesInterceptorService } from './hotelesInterceptor.service';

describe('HotelesService', () => {
  let service: HotelesInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelesInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
