import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockstatusComponent } from './stockstatus.component';

describe('StockstatusComponent', () => {
  let component: StockstatusComponent;
  let fixture: ComponentFixture<StockstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockstatusComponent]
    });
    fixture = TestBed.createComponent(StockstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
