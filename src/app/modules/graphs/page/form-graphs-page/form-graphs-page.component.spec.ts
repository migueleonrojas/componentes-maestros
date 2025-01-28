import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGraphsPageComponent } from './form-graphs-page.component';

describe('FormGraphsPageComponent', () => {
  let component: FormGraphsPageComponent;
  let fixture: ComponentFixture<FormGraphsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGraphsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGraphsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
