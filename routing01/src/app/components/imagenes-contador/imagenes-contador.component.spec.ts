import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesContadorComponent } from './imagenes-contador.component';

describe('ImagenesContadorComponent', () => {
  let component: ImagenesContadorComponent;
  let fixture: ComponentFixture<ImagenesContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenesContadorComponent]
    });
    fixture = TestBed.createComponent(ImagenesContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
