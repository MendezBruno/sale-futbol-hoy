import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrincipalComponent } from './admin-principal.component';

describe('AdminPrincipalComponent', () => {
  let component: AdminPrincipalComponent;
  let fixture: ComponentFixture<AdminPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
