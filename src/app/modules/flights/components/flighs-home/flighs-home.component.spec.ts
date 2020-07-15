import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighsHomeComponent } from './flighs-home.component';

describe('FlighsHomeComponent', () => {
  let component: FlighsHomeComponent;
  let fixture: ComponentFixture<FlighsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlighsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
