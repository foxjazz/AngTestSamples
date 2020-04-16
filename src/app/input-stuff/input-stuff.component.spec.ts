import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStuffComponent } from './input-stuff.component';

describe('InputStuffComponent', () => {
  let component: InputStuffComponent;
  let fixture: ComponentFixture<InputStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
