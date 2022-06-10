import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeformComponent } from './spikeform.component';

describe('SpikeformComponent', () => {
  let component: SpikeformComponent;
  let fixture: ComponentFixture<SpikeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpikeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
