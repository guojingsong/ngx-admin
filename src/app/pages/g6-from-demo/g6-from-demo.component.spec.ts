import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G6FromDemoComponent } from './g6-from-demo.component';

describe('G6FromDemoComponent', () => {
  let component: G6FromDemoComponent;
  let fixture: ComponentFixture<G6FromDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G6FromDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G6FromDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
