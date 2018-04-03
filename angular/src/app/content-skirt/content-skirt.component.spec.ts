import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSkirtComponent } from './content-skirt.component';

describe('ContentSkirtComponent', () => {
  let component: ContentSkirtComponent;
  let fixture: ComponentFixture<ContentSkirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSkirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSkirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
