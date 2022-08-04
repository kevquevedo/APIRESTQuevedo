import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAbmCursosComponent } from './forms-abm-cursos.component';

describe('FormsAbmCursosComponent', () => {
  let component: FormsAbmCursosComponent;
  let fixture: ComponentFixture<FormsAbmCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAbmCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAbmCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
