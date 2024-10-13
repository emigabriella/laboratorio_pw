import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasMascotaComponentComponent } from './caracteristicas-mascota-component.component';

describe('CaracteristicasMascotaComponentComponent', () => {
  let component: CaracteristicasMascotaComponentComponent;
  let fixture: ComponentFixture<CaracteristicasMascotaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasMascotaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasMascotaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
