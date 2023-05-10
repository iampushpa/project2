import { TestBed } from '@angular/core/testing';

import { InterCommuService } from './inter-commu.service';

describe('InterCommuService', () => {
  let service: InterCommuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterCommuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
