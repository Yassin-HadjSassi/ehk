import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmplacementComponent } from './modal-emplacement.component';

describe('ModalEmplacementComponent', () => {
  let component: ModalEmplacementComponent;
  let fixture: ComponentFixture<ModalEmplacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEmplacementComponent]
    });
    fixture = TestBed.createComponent(ModalEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
