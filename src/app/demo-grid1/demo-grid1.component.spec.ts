import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGrid1Component } from './demo-grid1.component';

describe('DemoGrid1Component', () => {
  let component: DemoGrid1Component;
  let fixture: ComponentFixture<DemoGrid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGrid1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
