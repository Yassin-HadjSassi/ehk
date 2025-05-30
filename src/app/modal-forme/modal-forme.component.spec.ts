import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormeComponent } from './modal-forme.component';

describe('ModalFormeComponent', () => {
  let component: ModalFormeComponent;
  let fixture: ComponentFixture<ModalFormeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormeComponent]
    });
    fixture = TestBed.createComponent(ModalFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
