import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapresultComponent } from './nmapresult.component';

describe('NmapresultComponent', () => {
  let component: NmapresultComponent;
  let fixture: ComponentFixture<NmapresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmapresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmapresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
