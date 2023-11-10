import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayipageComponent } from './bayipage.component';

describe('BayipageComponent', () => {
  let component: BayipageComponent;
  let fixture: ComponentFixture<BayipageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BayipageComponent]
    });
    fixture = TestBed.createComponent(BayipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
