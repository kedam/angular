import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoutComponent } from './iout.component';

describe('IoutComponent', () => {
  let component: IoutComponent;
  let fixture: ComponentFixture<IoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
