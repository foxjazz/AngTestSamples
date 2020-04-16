import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStuffComponent } from './control-stuff.component';

describe('ControlStuffComponent', () => {
  let component: ControlStuffComponent;
  let fixture: ComponentFixture<ControlStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
