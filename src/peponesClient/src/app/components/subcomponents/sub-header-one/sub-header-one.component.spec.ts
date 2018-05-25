import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderOneComponent } from './sub-header-one.component';

describe('SubHeaderOneComponent', () => {
  let component: SubHeaderOneComponent;
  let fixture: ComponentFixture<SubHeaderOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeaderOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
