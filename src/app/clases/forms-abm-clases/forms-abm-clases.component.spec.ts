import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAbmClasesComponent } from './forms-abm-clases.component';

describe('FormsAbmClasesComponent', () => {
  let component: FormsAbmClasesComponent;
  let fixture: ComponentFixture<FormsAbmClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAbmClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAbmClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
