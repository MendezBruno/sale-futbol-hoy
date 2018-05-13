import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJugadorComponent } from './admin-jugador.component';

describe('AdminJugadorComponent', () => {
  let component: AdminJugadorComponent;
  let fixture: ComponentFixture<AdminJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
