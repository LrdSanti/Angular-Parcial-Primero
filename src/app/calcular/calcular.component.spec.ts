import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularComponent } from './calcular.component';

describe('CalcularComponent', () => {
  let component: CalcularComponent;
  let fixture: ComponentFixture<CalcularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularComponent]
    });
    fixture = TestBed.createComponent(CalcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
