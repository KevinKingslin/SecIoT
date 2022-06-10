import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenvasresultComponent } from './openvasresult.component';

describe('OpenvasresultComponent', () => {
  let component: OpenvasresultComponent;
  let fixture: ComponentFixture<OpenvasresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenvasresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenvasresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
