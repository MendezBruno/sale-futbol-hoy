import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartidosComponent } from './admin-partidos.component';

describe('AdminPartidosComponent', () => {
  let component: AdminPartidosComponent;
  let fixture: ComponentFixture<AdminPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
