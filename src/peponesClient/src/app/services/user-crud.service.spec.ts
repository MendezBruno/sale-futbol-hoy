import { TestBed, inject } from '@angular/core/testing';

import { UserCrudService } from './user-crud.service';

describe('UserCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCrudService]
    });
  });

  it('should be created', inject([UserCrudService], (service: UserCrudService) => {
    expect(service).toBeTruthy();
  }));
});
