import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasComponentComponent } from './mascotas-component.component';

describe('MascotasComponentComponent', () => {
  let component: MascotasComponentComponent;
  let fixture: ComponentFixture<MascotasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
