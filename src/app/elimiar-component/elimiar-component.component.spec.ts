import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimiarComponentComponent } from './elimiar-component.component';

describe('ElimiarComponentComponent', () => {
  let component: ElimiarComponentComponent;
  let fixture: ComponentFixture<ElimiarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimiarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElimiarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
