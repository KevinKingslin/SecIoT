import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeresultComponent } from './spikeresult.component';

describe('SpikeresultComponent', () => {
  let component: SpikeresultComponent;
  let fixture: ComponentFixture<SpikeresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpikeresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
