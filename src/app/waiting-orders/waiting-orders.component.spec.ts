import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingOrdersComponent } from './waiting-orders.component';

describe('WaitingOrdersComponent', () => {
  let component: WaitingOrdersComponent;
  let fixture: ComponentFixture<WaitingOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitingOrdersComponent]
    });
    fixture = TestBed.createComponent(WaitingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
