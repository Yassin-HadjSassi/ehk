import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStockComponent } from './modal-stock.component';

describe('ModalStockComponent', () => {
  let component: ModalStockComponent;
  let fixture: ComponentFixture<ModalStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalStockComponent]
    });
    fixture = TestBed.createComponent(ModalStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
