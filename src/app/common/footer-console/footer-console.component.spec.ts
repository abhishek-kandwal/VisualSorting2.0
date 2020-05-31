import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConsoleComponent } from './footer-console.component';

describe('FooterConsoleComponent', () => {
  let component: FooterConsoleComponent;
  let fixture: ComponentFixture<FooterConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
