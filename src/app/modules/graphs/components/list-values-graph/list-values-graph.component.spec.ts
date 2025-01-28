import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValuesGraphComponent } from './list-values-graph.component';

describe('ListValuesGraphComponent', () => {
  let component: ListValuesGraphComponent;
  let fixture: ComponentFixture<ListValuesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListValuesGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValuesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
