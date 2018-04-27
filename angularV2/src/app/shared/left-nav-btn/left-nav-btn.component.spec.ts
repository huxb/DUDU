import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavBtnComponent } from './left-nav-btn.component';

describe('LeftNavBtnComponent', () => {
  let component: LeftNavBtnComponent;
  let fixture: ComponentFixture<LeftNavBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
