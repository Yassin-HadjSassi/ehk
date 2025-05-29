import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeFormComponent } from './forme-form.component';

describe('FormeFormComponent', () => {
  let component: FormeFormComponent;
  let fixture: ComponentFixture<FormeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeFormComponent]
    });
    fixture = TestBed.createComponent(FormeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
