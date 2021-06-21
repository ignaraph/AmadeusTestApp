import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesListadoComponent } from './hoteles-listado.component';

describe('HotelesListadoComponent', () => {
  let component: HotelesListadoComponent;
  let fixture: ComponentFixture<HotelesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
