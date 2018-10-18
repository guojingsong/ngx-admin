import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFromDemoComponent } from './json-from-demo.component';

describe('JsonFromDemoComponent', () => {
  let component: JsonFromDemoComponent;
  let fixture: ComponentFixture<JsonFromDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFromDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFromDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
