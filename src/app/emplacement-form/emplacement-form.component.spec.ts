import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementFormComponent } from './emplacement-form.component';

describe('EmplacementFormComponent', () => {
  let component: EmplacementFormComponent;
  let fixture: ComponentFixture<EmplacementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplacementFormComponent]
    });
    fixture = TestBed.createComponent(EmplacementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
