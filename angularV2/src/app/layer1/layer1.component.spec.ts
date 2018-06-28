import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer1Component } from './layer1.component';

describe('ContentComponent', () => {
  let component: Layer1Component;
  let fixture: ComponentFixture<Layer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
