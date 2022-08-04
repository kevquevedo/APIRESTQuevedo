import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCursosComponent } from './lista-de-cursos.component';

describe('ListaDeCursosComponent', () => {
  let component: ListaDeCursosComponent;
  let fixture: ComponentFixture<ListaDeCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
