import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaComponentComponent } from './caracteristica-component.component';

describe('CaracteristicaComponentComponent', () => {
  let component: CaracteristicaComponentComponent;
  let fixture: ComponentFixture<CaracteristicaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
