import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAnatomyComponent } from './dynamic-anatomy.component';

describe('DynamicAnatomyComponent', () => {
  let component: DynamicAnatomyComponent;
  let fixture: ComponentFixture<DynamicAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAnatomyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
