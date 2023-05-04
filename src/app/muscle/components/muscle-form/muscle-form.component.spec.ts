import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleFormComponent } from './muscle-form.component';

describe('MuscleFormComponent', () => {
  let component: MuscleFormComponent;
  let fixture: ComponentFixture<MuscleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
