import { TestBed, inject } from '@angular/core/testing';

import { JugadorCrudService } from './jugador-crud.service';

describe('JugadorCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadorCrudService]
    });
  });

  it('should be created', inject([JugadorCrudService], (service: JugadorCrudService) => {
    expect(service).toBeTruthy();
  }));
});
