import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoPartidoComponent } from './proximo-partido.component';

describe('ProximoPartidoComponent', () => {
  let component: ProximoPartidoComponent;
  let fixture: ComponentFixture<ProximoPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximoPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximoPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
