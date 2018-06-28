import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer2Component } from './layer2.component';

describe('ContentComponent', () => {
  let component: Layer2Component;
  let fixture: ComponentFixture<Layer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
