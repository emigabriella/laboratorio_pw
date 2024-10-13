import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaComponentComponent } from './mascota-component.component';

describe('MascotaComponentComponent', () => {
  let component: MascotaComponentComponent;
  let fixture: ComponentFixture<MascotaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
