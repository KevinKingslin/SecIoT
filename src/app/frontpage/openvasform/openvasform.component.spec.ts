import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenvasformComponent } from './openvasform.component';

describe('OpenvasformComponent', () => {
  let component: OpenvasformComponent;
  let fixture: ComponentFixture<OpenvasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenvasformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenvasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
