import { TestBed } from '@angular/core/testing';

import { ContactsServiceTsService } from './contacts.service.ts.service';

describe('ContactsServiceTsService', () => {
  let service: ContactsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
