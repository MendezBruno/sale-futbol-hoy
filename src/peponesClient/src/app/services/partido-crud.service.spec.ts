import { TestBed, inject } from '@angular/core/testing';

import { PartidoCrudService } from './partido-crud.service';

describe('PartidoCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidoCrudService]
    });
  });

  it('should be created', inject([PartidoCrudService], (service: PartidoCrudService) => {
    expect(service).toBeTruthy();
  }));
});
