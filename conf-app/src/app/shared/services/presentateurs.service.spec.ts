import { TestBed } from '@angular/core/testing';

import { PresentateursService } from './presentateurs.service';

describe('PresentateursService', () => {
  let service: PresentateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
