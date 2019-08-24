import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogManagerComponent } from './test-log-manager.component';

describe('TestLogManagerComponent', () => {
  let component: TestLogManagerComponent;
  let fixture: ComponentFixture<TestLogManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLogManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLogManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
