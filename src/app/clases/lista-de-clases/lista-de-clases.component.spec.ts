import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeClasesComponent } from './lista-de-clases.component';

describe('ListaDeClasesComponent', () => {
  let component: ListaDeClasesComponent;
  let fixture: ComponentFixture<ListaDeClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
