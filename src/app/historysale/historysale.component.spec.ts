import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorysaleComponent } from './historysale.component';

describe('HistorysaleComponent', () => {
  let component: HistorysaleComponent;
  let fixture: ComponentFixture<HistorysaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorysaleComponent]
    });
    fixture = TestBed.createComponent(HistorysaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
