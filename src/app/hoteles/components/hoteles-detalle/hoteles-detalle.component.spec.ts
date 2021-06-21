import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesDetalleComponent } from './hoteles-detalle.component';

describe('HotelesDetalleComponent', () => {
  let component: HotelesDetalleComponent;
  let fixture: ComponentFixture<HotelesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
