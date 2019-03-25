import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditProviderComponent } from './addor-edit-provider.component';

describe('AddorEditProviderComponent', () => {
  let component: AddorEditProviderComponent;
  let fixture: ComponentFixture<AddorEditProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorEditProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorEditProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
