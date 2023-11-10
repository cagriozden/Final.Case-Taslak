import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealeranalysisComponent } from './dealeranalysis.component';

describe('DealeranalysisComponent', () => {
  let component: DealeranalysisComponent;
  let fixture: ComponentFixture<DealeranalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealeranalysisComponent]
    });
    fixture = TestBed.createComponent(DealeranalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
