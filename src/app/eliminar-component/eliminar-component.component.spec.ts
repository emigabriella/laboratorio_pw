import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComponentComponent } from './eliminar-component.component';

describe('EliminarComponentComponent', () => {
  let component: EliminarComponentComponent;
  let fixture: ComponentFixture<EliminarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
