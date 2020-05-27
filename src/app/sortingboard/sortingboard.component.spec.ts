import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingboardComponent } from './sortingboard.component';

describe('SortingboardComponent', () => {
  let component: SortingboardComponent;
  let fixture: ComponentFixture<SortingboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
