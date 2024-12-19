import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciasComponent } from './diferencias.component';

describe('DiferenciasComponent', () => {
  let component: DiferenciasComponent;
  let fixture: ComponentFixture<DiferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiferenciasComponent]
    });
    fixture = TestBed.createComponent(DiferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
