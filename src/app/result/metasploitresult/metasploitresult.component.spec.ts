import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasploitresultComponent } from './metasploitresult.component';

describe('MetasploitresultComponent', () => {
  let component: MetasploitresultComponent;
  let fixture: ComponentFixture<MetasploitresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasploitresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasploitresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
